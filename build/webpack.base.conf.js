const webpack = require('webpack');
const config = require('../package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const moment = require('moment');
const isDev = process.env.NODE_ENV === 'development';
var test = process.env.NODE_ENV === 'test';
const path = require('path');
module.exports = {
    stats: {
        entrypoints: false,
        children: false
    },
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
                use: {
                    loader: 'babel-loader'
                }
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
(c) 2017-2018 JDC
Released under the MIT License.`
        }),
        new VueLoaderPlugin()
    ],
}