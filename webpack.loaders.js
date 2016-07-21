module.exports = [
	{
		test: /\.js?$/,
		exclude: /(node_modules)/,
		loaders: ['react-hot', 'babel'],
	},
];
