module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules)/,
		loaders: ['react-hot', 'babel'],
	},
];
