import Webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { baseConfig } from './base.config';
import { ROOT_CLI_PATH, ROOT_PACKAGE_PATH } from '../util/dic';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { isDev } from '../util';
const { version } = require(ROOT_PACKAGE_PATH('package.json'));
const MarkDownToVue = require('@nutui/markdown-to-vue');
export const devConfig: Webpack.Configuration = merge(baseConfig, {
	mode: 'development',
	entry: {
		'nutui-mobile': ROOT_CLI_PATH('site/demo/app.js'),
		'nutui-doc': ROOT_CLI_PATH('site/doc/app.js')
	},
	output: {
		filename: '[name].bundle.js',
		chunkFilename: '[name].chunk.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				chunks: {
					chunks: 'all',
					minChunks: 2,
					minSize: 0,
					name: 'common_chunks'
				}
			}
		}
	},
	plugins: [
		// doc
		new MarkDownToVue({
			entry: ROOT_PACKAGE_PATH('src'),
			output: ROOT_CLI_PATH('site/doc/view/'),
			template: './doc-site/template.html',
			nav: 'left',
			needCode: true,
			isbuild: isDev(),
			hasMarkList: false,
			version
		}),
		new MarkDownToVue({
			entry: ROOT_PACKAGE_PATH('docs'),
			output: ROOT_CLI_PATH('site/doc/page/'),
			template: './doc-site/template.html',
			nav: 'left',
			needCode: false,
			isbuild: isDev(),
			version
		}),
		new MiniCssExtractPlugin({
			filename: isDev() ? '[name].css' : 'css/[name].[hash].min.css'
		}),
		new HtmlWebpackPlugin({
			template: ROOT_CLI_PATH('site/doc/index.html'),
			filename: 'index.html',
			hash: true, //防止缓存
			inject: true,
			chunks: ['common_chunks', 'nutui-doc'],
			minify: {
				minifyJS: true,
				minifyCSS: true,
				removeAttributeQuotes: true //压缩 去掉引号
			}
		}),
		new HtmlWebpackPlugin({
			template: ROOT_CLI_PATH('site/demo/index.html'),
			filename: 'demo.html',
			hash: true, //防止缓存
			inject: true,
			chunks: ['common_chunks', 'nutui-mobile'],
			minify: {
				minifyJS: true,
				minifyCSS: true,
				removeAttributeQuotes: true //压缩 去掉引号
			}
		}),
		new Webpack.HotModuleReplacementPlugin()
	]
});
