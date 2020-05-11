import { ROOT_PACKAGE_PATH } from '../util/dic';
import { packageConfig } from './package.config';
import merge from 'webpack-merge';
module.exports = merge(packageConfig(false), {
	module: {
		rules: [
			{
				test: /\.(js|ts)/,
				use: {
					loader: 'istanbul-instrumenter-loader',
					options: { esModules: true },
				},
				include: [ROOT_PACKAGE_PATH('src/packages')],
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					{
						loader: 'sass-loader',
						options: {
							prependData: `@import "@/styles/index.scss"; `,
						},
					},
				],
			},
		],
	},
	devtool: 'inline-cheap-module-source-map',
	externals: [require('webpack-node-externals')()],
});
