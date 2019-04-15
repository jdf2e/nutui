const presets = [
    [
        "@babel/preset-env",
        {
            "modules": false,
            "targets": {
                "browsers": [
                    "Android >= 4",
                    "iOS >= 8"
                ]
            },
            "useBuiltIns": "usage"
        }

    ]
];

const plugins = [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-syntax-dynamic-import",
    "istanbul"
];


// if (process.env["NODE_ENV"] === "test") {
//     presets[0][1].modules = "commonjs";
// }

if (process.env["DOC_TYPE"] === "true") {
    presets[0][1].modules = "commonjs";
}

module.exports = { presets, plugins };