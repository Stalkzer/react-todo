var path = require("path");
var webpack = require("webpack");
var envFile = require("node-env-file");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

try {
    envFile(path.resolve(__dirname, 'config/' + process.env.NODE_ENV + '.env'));
} catch (e) {

}

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
        // new webpack.optimize.UglifyJsPlugin({
        //     compressor: {
        //         warnings: false
        //     }
        // }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
                GITHUB_ACCESS_TOKEN: JSON.stringify(process.env.GITHUB_ACCESS_TOKEN)
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