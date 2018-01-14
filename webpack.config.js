const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const config = {
    entry: ['./app/app.js', './app/css/style.scss'] ,
    output: {
        path: path.resolve(__dirname, './app/build'),
        filename: 'out.js'
    },
    watch: true,
    module: {
        rules: [
          {
            test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
            use: 'url-loader?limit=100000'
           },
          {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader!postcss-loader",
            }),
        }
      ]
    },
    plugins: [
        new ExtractTextPlugin({filename: "[name].css"}),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [autoprefixer]
            }
        })
    ],
}

module.exports = config;
