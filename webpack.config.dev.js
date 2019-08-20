"use strict";

const HtmlWebpackPlugin = require("html-webpack-plugin");

const {
    VueLoaderPlugin
} = require("vue-loader");
const path = require("path");

module.exports = {
    mode: "development",
    entry: ["./index.js"],
    output: {
        path: path.resolve(__dirname, "dist/"),
        publicPath: "/dist/",
        filename: "build.js"
    },
    module: {
        rules: [{
                test: /\.css/,
                use: ['vue-style-loader', 'css-loader'] // BOTH are needed!
            },

            {
                test: /\.vue$/,
                use: "vue-loader"
            },
        ]
    },
    watch: true,
    watchOptions: {
        // ignored: /node_modules/
    },
    plugins: [new VueLoaderPlugin()]
};