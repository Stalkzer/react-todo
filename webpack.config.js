var path = require("path");
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {
    entry: [
        "script-loader!jquery/dist/jquery.min.js",
        "script-loader!foundation-sites/dist/js/foundation.min.js",
        "./app/app.jsx"
    ],
    externals: {
        jquery: "jQuery"
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery:"jquery"
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                context: '/', 
                sassLoader: {
                    includePaths: [
                        path.resolve(__dirname, './node_modules/foundation-sites/scss'),
                    ]
                }
            }
        })
    ],
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    resolve: {
        modules: [
            path.join(__dirname,"app/components"),
            path.join(__dirname,"app/api"),
            "node_modules"
        ],
        alias: {
            app: path.resolve(__dirname,"app"),
            applicationStyles: path.resolve(__dirname, "app/styles/app.scss"),
            actions: path.resolve(__dirname, "app/actions/actions"),
            reducers: path.resolve(__dirname, "app/reducers/reducers"),
            configureStore: path.resolve(__dirname, "app/store/configureStore")

        },
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [
                path.resolve(__dirname, "app")
                ],
                exclude: [
                path.resolve(__dirname, "node_modules")
                ],
                loader: "babel-loader",
                options: {
                    presets: ["react","es2015","stage-0"]
                }
            }
        ]
    },
    devtool: process.env.NODE_ENV === "production" ? undefined : "inline-source-map"
};