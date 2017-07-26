var path = require("path");
var webpack = require("webpack");
console.log('__dirname---------------------->', __dirname);
module.exports = {
  context: __dirname,
	resolve: {
		extensions: [".js", ".jsx"]
	},
	entry: {
		a:["./a/aa","./a/ab"],
		b:["./b/ba","./b/bb"],
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
