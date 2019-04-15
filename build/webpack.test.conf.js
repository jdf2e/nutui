
const prodConf = require('./webpack.prod.conf.js');
const merge = require('webpack-merge');


module.exports = merge(prodConf, {
    module: {
        rules: [
            {
                test: /\.(js|ts)/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true }
                }
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style!css' }]
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'sass-loader',
                    options: { data: `@import "./src/styles/index.scss"; `, }
                }]
            },
        ],
    },
    devtool: 'inline-cheap-module-source-map',
    externals: [require('webpack-node-externals')()]
});
