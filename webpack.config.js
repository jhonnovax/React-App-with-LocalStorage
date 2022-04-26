const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, "src", "index.js"),
	
	output: {
		path:path.resolve(__dirname, "dist"),
	},

	module: {
		rules: [
		  	{
				test: /\.?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env', 
							['@babel/preset-react', { "runtime": "automatic" }]
						]
					}
				}
		  	},
		  	{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader", 
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						}
					}
				]
		  	},
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src", "index.html"),
		}),
	],
}