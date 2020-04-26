import Webpack from 'webpack';
import merge from 'webpack-merge';
import { ROOT_PACKAGE_PATH } from '../util/dic';
import { baseConfig } from './base.config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
const confs = require(ROOT_PACKAGE_PATH('src/config.json'));
export function packageDisperseConfig() {
	const entry: any = {};
	confs.packages.map((item: any) => {
		const cptName: string = item.name.toLowerCase();
		entry[cptName] = ROOT_PACKAGE_PATH(`src/packages/${cptName}/index.js`);
	});

	const _packageDisperseConfig: Webpack.Configuration = {
		mode: 'production',
		devtool: 'source-map',
		entry,
		output: {
			path: ROOT_PACKAGE_PATH('dist/packages/'),
			filename: '[name]/[name].js',
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
			minimize: true,
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name]/[name].css',
			}),
			new OptimizeCSSAssetsPlugin(),
			new CopyWebpackPlugin([
				{
					from: ROOT_PACKAGE_PATH('src/'),
					to: ROOT_PACKAGE_PATH('dist/'),
					ignore: ['demo.vue', 'doc.md', 'config.json', 'nutui.js', '*.spec.js'],
				},
			]),
			new CopyWebpackPlugin([
				{
					from: ROOT_PACKAGE_PATH('types/'),
					to: ROOT_PACKAGE_PATH('dist/types/'),
				},
			]),
		],
	};
	return merge(baseConfig, _packageDisperseConfig);
}
