const path = require('path');
const webpackBaseConf = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');

const mdtohtml = require('../scripts/md-to-other');
const isDev = process.env.NODE_ENV === 'development';

module.exports = merge(webpackBaseConf, {
    entry: {
        app: './sites/doc/app.js',
    },
    output: {
        path: path.resolve(__dirname, '../dist/sites/doc/'),
        chunkFilename: 'js/[name].[hash:5].js',
        filename: isDev ? 'js/[name].js' : 'js/[name].[hash].js'
    },
    module: {
    },
    plugins: [
        new mdtohtml({
            entry:'./src',
            output:'./sites/doc/view/',
            template:'./doc-site/template.html',
            nav:'left' // left top right bottom
        }),
        new mdtohtml({
            entry:'./docs',
            output:'./sites/doc/page/',
            template:'./doc-site/template.html',
            nav:'left', // left top right bottom
            nohead:true
        }),
        new HtmlWebpackPlugin({
            template: './sites/doc/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].css' : 'css/[name].[hash].css'
        })
    ]
});

