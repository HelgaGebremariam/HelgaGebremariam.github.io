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
			}
        ]
    },
	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({PROD: true})
	]
}