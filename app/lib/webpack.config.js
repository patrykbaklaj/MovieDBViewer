const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

const config = {
    entry: ['./js/app.js', './scss/main.scss'] ,
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader!postcss-loader",
            }),
        }]
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].css"}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        })
    ]
}

module.exports = config;
