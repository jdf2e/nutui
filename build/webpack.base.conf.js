const webpack = require('webpack');
const config = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const moment = require('moment');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const isDev = process.env.NODE_ENV === 'development';
var test = process.env.NODE_ENV === 'test';
const path = require('path');
const HappyPack = require('happypack');
const os = require('os');
const chalk= require('chalk');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = {
    stats: {
        entrypoints: false,
        children: false
    },
    stats: 'errors-only',
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [
            !test ? {
                test: /\.(sa|sc|c)ss$/,
                use: [                    
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            data: `@import "./src/styles/index.scss"; `,
                        },
                    }
                ],
            }:{},
            {
                test: /\.svg$/,
                use: 'raw-loader'
            },
            {
                test: /\.vue$/,
                use: [
                    'cache-loader',
                    {
                        loader: 'vue-loader',
                        options: {
                           /*  preLoaders: {
                               js: 'istanbul-instrumenter-loader?esModules=true'
                            }, */
                            loaders: {
                                sass: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader']
                            }
                            
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['happypack/loader?id=Babel']
            }, 
            {
                test: /\.(png|jpg|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 3000,
                    name: 'img/[name].[ext]',
                }
            },]
    },
    plugins: [
        new webpack.BannerPlugin({
            banner: `NutUI v${config.version} - [filebase], [hash], ${moment().format()}
(c) 2017-2019 JDC
Released under the MIT License.`
        }),
        new HappyPack({
            //用id来标识 happypack处理那里类文件
          id: 'Babel',
          //如何处理  用法和loader 的配置一样
          loaders: [{
            loader: 'babel-loader?cacheDirectory=true',
          }],
          //共享进程池
          threadPool: happyThreadPool,
          //允许 HappyPack 输出日志
          verbose: false,
        }),       
        new VueLoaderPlugin(),
        new ProgressBarPlugin({
            format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)',      
            clear: false, 
            width: 100
        }),
        new WebpackBuildNotifierPlugin({
            title: "NutUI Webpack Build",        
            suppressSuccess: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
}