
const presets = [
  [
    "@babel/preset-env",
    {
      loose: true,
      modules: false
    }

  ],
];


const plugins = [
  "@babel/plugin-transform-runtime",
];

module.exports = { presets, plugins };