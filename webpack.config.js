const webpack = require('webpack');

module.exports={
    entry: ["./scripts/NewsLoader.js"],
    output: {
		path: __dirname + "/dist",
        filename: "./build.js"
    },
	module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            },
			{
				test: /\.css$/, loader: "style-loader!css-loader"
			},
			{
				test: /\.png$/,
				loader: "url-loader?limit=100000"
			},
			{
				test: /\.jpg$/,
				loader: "file-loader"
			}
        ]
    },
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({PROD: false})
	], 
	cache: true,
	watch: true,
	devServer: {
		host: "localhost",
		port: "3000",
		contentBase: "."
	}
}