const EslintFriendlyFormatter = require('eslint-friendly-formatter')
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

const vueMarkdown = {
    raw: true,
    preprocess: function (markdownIt, source) {
        // do any thing
        return source
    }
}

let cssLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: { sourceMap: !isProduction }
    },
    {
        loader: 'postcss-loader'
    },
    {
        loader: 'stylus-loader'
    },
    {
        loader: 'style-resources-loader',
        options: {
            patterns: [
                resolve('components/_styles/*.styl')
            ]
        }
    }
]

if (isProduction) {
    // const styleLoader = cssLoader.shift()
    // cssLoader = ExtractTextPlugin.extract({
    //     fallback: styleLoader,
    //     use: cssLoader
    // })
}

module.exports = {
    mode: 'development',
    entry: {
        index: './example/index.js'
    },
    devtool: '#cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.vue', '.json', '.md']
    },
    module: {
        rules: [
            {
                test: /\.(vue|js)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('examples'), resolve('components')],
                options: {
                    fix: true,
                    formatter: EslintFriendlyFormatter
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@vue/app'
                    ]
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'images/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(css|styl|stylus)$/,
                use: cssLoader
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new VueLoaderPlugin()
    ]
}
