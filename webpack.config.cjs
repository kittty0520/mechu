const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './assets/js/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
	plugins: [new Dotenv()],
	devServer: {
		contentBase: './dist',
		port: 3000,
		open: true,
	},
	mode: 'production',
};
