const presets = [
  [
    '@babel/preset-env',
    {
      loose: false,
      modules: false,
      targets: {
        browsers: ['Android >= 4', 'iOS >= 8']
      }
    }
  ]
];

const plugins = [
  '@babel/plugin-transform-runtime',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-transform-object-assign',
  'istanbul'
];

module.exports = { presets, plugins };
