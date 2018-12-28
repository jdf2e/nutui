const path = require('path');
const baseConf = require('./webpack.demo.base.conf.js');
const merge = require('webpack-merge');
const Carefree = require('@nutui/carefree');


module.exports = merge(baseConf, {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    devtool: 'cheap-module-eval-source-map',
    plugins:[
        new Carefree({
            upload: true,
            publicPath: '//page.jd.com/exploit/nutui2/',
            ftp: {
                host: '192.168.181.73',
                port: 3000,
                source: 'dist/demo',
                target: '/var/www/html/page.jd.com/exploit/nutui2/'
            }
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true, //gzip压缩
        historyApiFallback: true,
    }
});