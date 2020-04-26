import Webpack from 'webpack';
import merge from 'webpack-merge';
import { devConfig } from './dev.config';
import { ROOT_PACKAGE_PATH } from '../util/dic';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
export const prodConfig: Webpack.Configuration = merge(devConfig, {
	mode: 'production',
	output: {
		path: ROOT_PACKAGE_PATH('dist/sites'),
		filename: 'js/[name].[hash].bundle.min.js',
		chunkFilename: 'js/[name].[chunkhash].chunk.min.js',
	},
	optimization: {
		minimize: true,
	},
	plugins: [new OptimizeCSSAssetsPlugin()],
});
