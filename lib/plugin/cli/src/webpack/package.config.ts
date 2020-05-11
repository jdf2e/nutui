import Webpack from 'webpack';
import merge from 'webpack-merge';
import { ROOT_PACKAGE_PATH } from '../util/dic';
import { baseConfig } from './base.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
export function packageConfig(isMinimize: boolean) {
	const _packageConfig: Webpack.Configuration = {
		mode: 'production',
		devtool: 'source-map',
		entry: {
			nutui: ROOT_PACKAGE_PATH('src/nutui.js'),
		},
		output: {
			path: ROOT_PACKAGE_PATH('dist/'),
			filename: isMinimize ? '[name].min.js' : '[name].js',
			library: '[name]',
			libraryTarget: 'umd',
			umdNamedDefine: true,
			// https://stackoverflow.com/questions/49111086/webpack-4-universal-library-target
			globalObject: `(typeof self !== 'undefined' ? self : this)`,
		},
		externals: {
			vue: {
				root: 'Vue',
				commonjs: 'vue',
				commonjs2: 'vue',
				amd: 'vue',
			},
		},
		optimization: {
			minimize: isMinimize,
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: isMinimize ? '[name].min.css' : '[name].css',
			}),
		],
	};
	isMinimize && _packageConfig.plugins?.push(new OptimizeCSSAssetsPlugin());
	return merge(baseConfig, _packageConfig);
}
