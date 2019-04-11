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


if (process.env["NODE_ENV"] === "test") {
    presets[0][1].modules = "commonjs";
}

if (process.env["NODE_ENV"] === "production" && process.env["PROD_TYPE"] === "disp") {
    presets[0][1].useBuiltIns = false;
}

module.exports = { presets, plugins };