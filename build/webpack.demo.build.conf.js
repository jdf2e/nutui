const webpack = require('webpack');
const baseConf = require('./webpack.demo.base.conf.js');
const merge = require('webpack-merge');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OfflinePlugin = require('offline-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rimraf = require('rimraf');

rimraf('./dist/sites/demo', function (err) {
    if(err) console.log(err);
});

rimraf('./dist/sites/demo.html', function (err) {
    if (err) console.log(err);
});

module.exports = merge(baseConf, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/img/favicon.ico"), to: path.join(__dirname, "../dist/sites/")}
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/img/pwa_logo.png"), to: path.join(__dirname, "../dist/sites/img/") }
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, "../sites/demo/asset/manifest.json"), to: path.join(__dirname, "../dist/sites/demo/") }
        ]),
        new OfflinePlugin({
            ServiceWorker: {
                events: true
            }
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false
                    }
                },
                sourceMap: false,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
});