import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import logger from '../util/logger';

function devServer(config: Webpack.Configuration) {
	const compiler = Webpack(config);
	const devServerOptions = {
		open: false,
		host: '0.0.0.0',
		stats: 'errors-only',
		publicPath: '/',
		disableHostCheck: true,
		hot: true,
		hotOnly: true,
		inline: true,
		overlay: {
			warnings: true,
			errors: true
		},
		watchOptions: {
			ignored: /node_modules/
		}
	};
	const server = new WebpackDevServer(compiler, devServerOptions);

	server.listen(8000, '0.0.0.0', (err: Error) => {
		if (err) logger.error(err);
	});
}
function build(config: Webpack.Configuration) {
	return new Promise((resolve, reject) => {
		Webpack(config, (err: any, stats) => {
			if (err || stats.hasErrors()) {
				// 在这里处理错误
				if (err) {
					logger.error(err.stack || err);
					if (err.details) {
						logger.error(err.details);
					}
					return;
				}
				const info = stats.toJson();
				if (stats.hasErrors()) {
					logger.error(info.errors);
				}
				if (stats.hasWarnings()) {
					logger.warn(info.warnings);
				}
				reject(err || stats.toJson());
			} else {
				// 处理完成
				resolve();
			}
		});
	});
}
export function compileWebPack(config: Webpack.Configuration) {
	switch (config.mode) {
		case 'development':
			devServer(config);
			break;
		case 'production':
			return build(config);
	}
}
