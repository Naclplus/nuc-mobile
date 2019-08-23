const path = require('path')
const os = require('os')
const fs = require('fs')
const replacePlugin = require('rollup-plugin-replace')
const jsonPlugin = require('rollup-plugin-json')
const urlPlugin = require('rollup-plugin-url')
const nodeResolvePlugin = require('rollup-plugin-node-resolve')
const vuePlugin = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const babel = require('rollup-plugin-babel')
const commonjs = require('rollup-plugin-commonjs')
const stylus = require('stylus')
const { terser } = require('rollup-plugin-terser')
const progress = require('rollup-plugin-progress')
const filesize = require('rollup-plugin-filesize')
const postcss = require('rollup-plugin-postcss')
const findPostcssConfig = require('postcss-load-config')
const pkg = require('../package.json')

// const postcssUrl = require('postcss-url')

const isProduction = process.env.NODE_ENV === 'production'
// const isSpecial = process.env.BUILD_TYPE === 'special'

function resolve (dir) {
    return path.resolve(__dirname, '..', dir)
}
const LIB_DIR = resolve('lib')
const PROJECT_DIR = resolve('.')

const tmpDir = os.tmpdir()
const DEV_OUTPUT_DIR = fs.mkdtempSync(`${tmpDir}${path.sep}`)

async function vueWarpper () {
    let distDir = ''; let fileName = ''
    if (isProduction) {
        fileName = process.env.BUILD_TYPE !== 'umd' ? 'nuc-mobile.css' : 'nuc-mobile.variable.css'
        distDir = LIB_DIR
    }

    const {
        options,
        plugins
    } = await findPostcssConfig({
        env: process.env.NODE_ENV
    })
    return [
        css({
            output: path.resolve(distDir, fileName)
        }),
        vuePlugin({
            css: false,
            style: {
                postcssOptions: options,
                postcssPlugins: plugins,
                preprocessOptions: {
                    stylus: {
                        use: [(styl) => {
                            styl.define('url', stylus.url())
                                .import(path.join(__dirname, '../components/_styles/utils.styl'))
                                .import(path.join(__dirname, '../components/_styles/basic.styl'))
                                .import(path.join(__dirname, '../components/_styles/variables.styl'))
                        }]
                    }
                }
            }
        })
    ]
}

// const css = cssWarpper()

function conditionHelper (condition, plugins) {
    return condition ? plugins : []
}

const rollupPluginFactory = async () => {
    const vue = await vueWarpper()
    return [
        // resolve
        nodeResolvePlugin({
            extensions: [ '.js', '.json', '.vue' ]
        }),
        // inject
        replacePlugin({
            'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
            'MAN_VERSION': `"${pkg.version}"`
        }),
        // resource
        urlPlugin({
            limit: 10 * 1024
        }),
        jsonPlugin(),
        ...(conditionHelper(isProduction, [
            commonjs()
        ])),
        ...vue,
        postcss({
            config: {
                path: resolve('postcss.config.js')
            }
        }),
        babel({
            runtimeHelpers: true,
            plugins: ['@babel/plugin-external-helpers'],
            externalHelpers: true
        }),
        // dest
        ...(conditionHelper(isProduction, [
            terser()
        ])),
        // cli
        progress(),
        ...(conditionHelper(isProduction, [
            filesize()
        ]))
    ]
}
module.exports = {
    LIB_DIR,
    PROJECT_DIR,
    DEV_OUTPUT_DIR,
    rollupPluginFactory
}
