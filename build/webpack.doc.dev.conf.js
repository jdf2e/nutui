
const path = require('path');
const baseConf = require('./webpack.doc.base.conf.js');
const merge = require('webpack-merge')


module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
    }
});