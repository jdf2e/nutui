

const path = require('path');
const baseConf = require('./webpack.demo.base.conf.js');
const merge = require('webpack-merge');


module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        historyApiFallback: true,
    },
    externals:  [require('webpack-node-externals')()]
});
