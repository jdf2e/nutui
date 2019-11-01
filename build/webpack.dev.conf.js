const config = require('../package.json');
const path = require('path');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const mdtohtml = require('../scripts/mdToVue');
const isDev = process.env.NODE_ENV === 'development';


module.exports = merge(webpackBaseConf, {
    mode: 'development',
    entry: {
        'nutui-mobile': './sites/demo/app.js',
        'nutui-doc': './sites/doc/app.js',
    },
    output: {
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            //自定义主题
            // {
            //     test: /\.(sa|sc|c)ss$/,
            //     use: [
            //         {
            //             loader: 'sass-loader',
            //             options: {
            //                 data: `@import "./sites/demo/asset/css/custom.scss";@import "./src/styles/index.scss"; `,
            //             },
            //         }
            //     ],
            // }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                chunks: {
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0,
                    name: 'chunks'
                }
            }
        }
    },
    plugins: [
        //demo 
        new HtmlWebpackPlugin({
            template: './sites/demo/index.html',
            filename: 'demo.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['chunks', 'nutui-mobile'],
            minify: {
                multihtmlCache: true,// 解决多页打包的关键！
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
        // doc
        new mdtohtml({
            entry: './src',
            output: './sites/doc/view/',
            template: './doc-site/template.html',
            nav: 'left',
            needCode: true,
            isbuild: isDev,
            hasMarkList: false
        }),
        new mdtohtml({
            entry: './docs',
            output: './sites/doc/page/',
            template: './doc-site/template.html',
            nav: 'left',
            needCode: false,
            isbuild: isDev
        }),
        new HtmlWebpackPlugin({
            template: './sites/doc/index.html',
            filename: 'default.html',
            hash: true,//防止缓存
            inject: true,
            chunks: ['chunks', 'nutui-doc'],
            minify: {
                multihtmlCache: true,// 解决多页打包的关键！
                minifyJS: true,
                minifyCSS: true,
                removeAttributeQuotes: true//压缩 去掉引号
            }
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist/sites'),
        compress: true,
        index: 'default.html',
        historyApiFallback: true,
        disableHostCheck: true,
        host: "0.0.0.0",
        hot: true,
        hotOnly: true,
        inline: true,
        overlay: {
            warnings: true,
            errors: true
        },
        watchOptions: {
            ignored: /node_modules/
        }
    }

});