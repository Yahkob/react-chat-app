var webpack = require('webpack');
var path = require('path');
var loaders = require('./webpack.loaders');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const HOST = process.env.HOST || "0.0.0.0";
const PORT = process.env.PORT || "8888";
module.exports = {
    entry: [
        `webpack-dev-server/client?http://${HOST}:${PORT}`,
        'webpack/hot/only-dev-server',
	'./src/app.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./dist",
        noInfo: true,
        hot: true,
        inline: true,
        port: PORT,
        host: HOST
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([
            {from: './app.html'}
        ]),
    ]
};
