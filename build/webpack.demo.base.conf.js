const config = require('../package.json');
const path = require('path');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');


const isDev = process.env.NODE_ENV === 'development';


module.exports = merge(webpackBaseConf, {
    entry: {
        app: './sites/demo/app.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist/sites/'),
        chunkFilename: 'demo/js/[name].[hash:5].js',
        filename: isDev ? 'demo/js/[name].js' : 'demo/js/[name].[hash].js'
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
    plugins: [
        new HtmlWebpackPlugin({
            template: './sites/demo/index.html',
            filename:'demo.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'demo/css/[name].css' : 'demo/css/[name].[hash].css'
        })
    ]
});