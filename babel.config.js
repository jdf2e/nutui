const presets = [
	[
		'@babel/preset-env',
		{
			loose: false,
			modules: 'commonjs',
			targets: {
				browsers: ['Android >= 4', 'iOS >= 8']
			}
		}
	]
];

const plugins = ['@babel/plugin-transform-runtime', '@babel/plugin-transform-object-assign', '@babel/plugin-proposal-object-rest-spread'];

module.exports = { presets, plugins };
