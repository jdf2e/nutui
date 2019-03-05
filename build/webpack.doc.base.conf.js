const path = require('path');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');

const mdtohtml = require('../scripts/mdToVue');
const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(webpackBaseConf, {
    entry: {
        app: './sites/doc/app.js',
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, '../dist/sites/'),
        chunkFilename: 'doc/js/[name].[hash:5].js',
        filename: isDev ? 'doc/js/[name].js' : 'doc/js/[name].[hash].js'
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        new mdtohtml({
            entry:'./src',
            output:'./sites/doc/view/',
            template:'./doc-site/template.html',
            nav:'left',
            needCode:true,
            isbuild:isDev,
            hasMarkList:false
        }),
        new mdtohtml({
            entry:'./docs',
            output:'./sites/doc/page/',
            template:'./doc-site/template.html',
            nav:'left',
            needCode:false,
            isbuild:isDev           
        }),
        new HtmlWebpackPlugin({
            template: './sites/doc/index.html',
            filename: 'default.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'doc/css/[name].css' : 'doc/css/[name].[hash].css'
        })
    ]
});

