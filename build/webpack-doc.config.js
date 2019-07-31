const EslintFriendlyFormatter = require('eslint-friendly-formatter')
const { resolve, convertHtml, strip } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MarkdownItAnchor = require('markdown-it-anchor')
const MarkdownItCantainer = require('markdown-it-container')
const slugify = require('transliteration').slugify
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

const vueMarkdown = {
    raw: true,
    preprocess: function (markdownIt, source) {
        // do any thing
        return source
    },
    use: [
        // [MarkdownItAnchor, {
        //     level: 2, // 添加超链接锚点的最小标题级别, 如: #标题 不会添加锚点
        //     slugify: slugify, // 自定义slugify, 我们使用的是将中文转为汉语拼音,最终生成为标题id属性
        //     permalink: true, // 开启标题锚点功能
        //     permalinkBefore: true // 在标题前创建锚点
        // }],
        [MarkdownItCantainer, 'doc', {
            validate: (params) => {
                return params.trim().match(/^doc\s*(.*)$/)
            },
            render: (tokens, index) => {
                let m = tokens[index].info.trim().match(/^doc\s*(.*)$/)
                // if (tokens[index].nesting === 1) {
                //     let description = (m && m.length > 1) ? m[1] : ''
                //     let content = tokens[index + 1].content
                //     let html = convertHtml(strip(content, ['script', 'style'])).replace(/(<[^>]*)=""(?=.*>)/g, '$1')
                // }
                if (tokens[index].nesting === 1) {
                    // opening tag
                    return '<code-card><h2>' + m[1] + '</h2>\n'
                } else {
                    // closing tag
                    return '</code-card>\n'
                }
            }
        }]
    ]
}

let cssLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: { sourceMap: !isProduction }
    },
    {
        loader: 'stylus-loader'
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
        index: './doc/index.js'
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
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader'
                    },
                    {
                        loader: 'vue-markdown-loader/lib/markdown-compiler',
                        options: vueMarkdown
                    }
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
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
            template: './doc/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new VueLoaderPlugin()
    ]
}
