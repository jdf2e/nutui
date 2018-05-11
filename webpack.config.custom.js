var webpack = require('webpack');
var path = require('path');
var config = require('./custom.json');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var autoprefixer = require('autoprefixer');

var webpackConfig = module.exports = {};

webpackConfig.entry = {
    nutui: './src/nutui-custom.js'
};

webpackConfig.output = {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/",
    filename: 'nutui.js',
    library: 'nutui',
    libraryTarget: 'umd',
    umdNamedDefine: true
};

webpackConfig.module = {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
    }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            postcss: [autoprefixer()]
        }
    }, {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
    }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
    }, {
        test: /\.(png|jpg|gif|webp)$/,
        loader: 'url-loader',
        options: {
            limit: 3000,
            name: 'img/[name].[ext]',
        }
    }, ]
};


webpackConfig.externals = {
    'vue': {
        root: 'Vue',
        commonjs: 'vue',
        commonjs2: 'vue',
        amd: 'vue'
    }
};

webpackConfig.plugins = [
    new webpack.LoaderOptionsPlugin({
        minimize: false
    }),
    new webpack.optimize.UglifyJsPlugin({
        ecma: 6,
        compress: {
            warnings: false
        }
    }),
    new webpack.BannerPlugin('NutUI v' + config.version + ' ' + new Date().toString())
];

webpackConfig.devtool = '#cheap-module-source-map';
webpackConfig.plugins = (webpackConfig.plugins || []).concat([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        },
        'CONFIG': config
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: false
    })
]);