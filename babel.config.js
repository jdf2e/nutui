const presets = [
	[
		'@babel/preset-env',
		{
			loose: true,
			modules: 'commonjs',
			targets: {
				browsers: ['Android >= 4', 'iOS >= 8']
			}
		}
	]
];

const plugins = ['@babel/plugin-transform-runtime', '@babel/plugin-transform-object-assign'];

module.exports = { presets, plugins };
