const EslintFriendlyFormatter = require('eslint-friendly-formatter')
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MarkdownItCantainer = require('markdown-it-container')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

const vueMarkdown = {
    raw: true,
    preprocess: function (markdownIt, source) {
        // do any thing
        return source
    },
    use: [
        [MarkdownItCantainer, 'doc', {
            validate: (params) => {
                return params.trim().match(/^doc\s*(.*)$/)
            },
            render: (tokens, index) => {
                let m = tokens[index].info.trim().match(/^doc\s*(.*)$/)
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

let plugins = []

if (!isProduction) {
    plugins = [
        new HtmlWebpackPlugin({
            template: './doc/index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new FriendlyErrorsPlugin(),
        new VueLoaderPlugin()
    ]
} else {
    plugins = [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css'
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './doc/index.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
            },
            chunksSortMode: 'dependency'
        }),
        new VueLoaderPlugin()
    ]
}
const config = {
    mode: isProduction ? 'production' : 'development',
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
    plugins
}

if (isProduction) {
    config.output = {
        filename: '[name].[hash:9].js',
        chunkFilename: '[name].[hash:9].js',
        publicPath: './',
        path: resolve('doc-dist')
    }
}

module.exports = config
