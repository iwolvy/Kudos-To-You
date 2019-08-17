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
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
        ]
    },
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    plugins: [new VueLoaderPlugin()]
};