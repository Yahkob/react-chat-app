var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules)/,
		loaders: ['react-hot', 'babel'],
	},
		{
		test: /\.gif/,
		loader: "url-loader?limit=10000&mimetype=image/gif"
	},
	{
		test: /\.css$/,
		loader: combineLoaders([
			{
			loader: 'style-loader'
			}, {
			loader: 'css-loader',
			query: {
				modules: true,
				localIdentName: '[name]__[local]___[hash:base64:5]'
			}
			}
		])
    }
];
