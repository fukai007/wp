var path = require("path");
var webpack = require("webpack");
console.log('__dirname---------------------->', __dirname);
module.exports = {
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		a:[__dirname+"/aa"]
	},
	output: {
		path: path.join(__dirname, "js"),
		filename: "MyDll.[name].js",
		library: "[name]_[hash]"
	},
	plugins: [
		new webpack.DllPlugin({
			path: path.join(__dirname, "js", "[name]-manifest.json"),
			name: "[name]_[hash]"
		})
	]
};
