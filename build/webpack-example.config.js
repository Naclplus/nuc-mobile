const EslintFriendlyFormatter = require('eslint-friendly-formatter')
const { resolve } = require('./utils')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const isProduction = process.env.NODE_ENV === 'production'

let cssLoader = [
    'style-loader',
    {
        loader: 'css-loader',
        options: { sourceMap: !isProduction }
    },
    {
        loader: 'postcss-loader',
        options: {
            plugins: () => [
                require('postcss-flexbugs-fixes')(),
                require('autoprefixer')({ grid: true }),
                require('postcss-pxtorem')({
                    rootValue: 75,
                    minPixelValue: 2,
                    propList: ['*']
                })
            ]
        }
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

let plugins = []

if (!isProduction) {
    plugins = [
        new HtmlWebpackPlugin({
            template: './example/index.html'
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
            template: './example/index.html',
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
        index: './example/index.js'
    },
    devServer: {
        disableHostCheck: true
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
    plugins
}

if (isProduction) {
    config.output = {
        filename: '[name].[hash:9].js',
        chunkFilename: '[name].[hash:9].js',
        publicPath: './',
        path: resolve('site/example')
    }
}

module.exports = config
