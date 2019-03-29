const webpack = require('webpack');
const cptConf = require('../src/config.json');
const webpackBaseConf = require('./webpack.base.conf.js');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const rimraf = require('rimraf');
const merge = require('webpack-merge');

rimraf('./dist/assets', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/locales', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/mixins', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/packages', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/styles', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/utils', function (err) {
    if (err) console.log(err);
});

rimraf('./dist/types', function (err) {
    if (err) console.log(err);
});


const entry = {};

cptConf.packages.map((item)=>{
    const cptName = item.name.toLowerCase();
    entry[cptName] = './src/packages/' + cptName + '/index.js';
});

module.exports = merge(webpackBaseConf, {
    mode: 'production',
    devtool: 'source-map',
    entry,
    output: {
        path: path.resolve(__dirname, '../dist/packages/'),
        publicPath: './assets/',
        filename: '[name]/[name].js',
        library: '[name]',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: {
        'vue': {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css'
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../src/"), to: path.join(__dirname, "../dist/"), ignore: ['demo.vue','doc.md','config.json','nutui.js'] }
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../types/"), to: path.join(__dirname, "../dist/types/")}
        ]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })
    ],
    optimization: {
        minimize: false
    }
});
