var webpack = require('webpack');
var path = require('path');
var HelloWorldPlugin = require('./js/webpackMyPlugin/HelloWorldPlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

console.log('__dirname-------------------->', __dirname);


module.exports = {
  entry: {
    main: './src/app/index.js',
    vendor: ['moment', 'lodash']
  },
  output: {
    filename: '[name].[hash:5].js',
    path: path.resolve(__dirname, 'dist')
  },
  module:{
    rules:[
      {
        test: /\.js/,
        exclude: ['/node_modules/','/dll','/js'],
        use:['babel-loader']
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              config: {
                path: path.resolve(__dirname, 'postcss.config.js')
              }
            }
          }
        ]
      }
    ]
  },
  //,new HelloWorldPlugin() 自己写的
  plugins: [
    /*
      ERROR in chunk manifest [entry]
      [name].[chunkHash].js
      Cannot use [chunkhash] for chunk in '[name].[chunkHash].js' (use [hash] instead)
    */
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor','manifest'] // Specify the common bundle's name.
    }),
    new HtmlWebpackPlugin({
      //可以自动把带哈希的js自动引入到html中
      template: 'index.html' // 模板路径
    }),
    new CopyWebpackPlugin([
      {
        context:path.join(__dirname, "src"),
        from:'mockData/*'
      }
    ])
  ],
  devServer: {
    //设置根目录为 dist,所以 index也得放到dist中
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  }
};

/**
rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader'},
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      }
      {
        test: /\.js/,
        exclude: /node_modules/,
        use:[
          {
            loader: path.resolve('./js/webpackMyLoader/hLoader0.js'),
            options:{a:100,b:200}
          },
          {
            loader: path.resolve('./js/webpackMyLoader/hLoader1.js'),
            options:{a:300,b:400}
          }
        ]
      }
    ]
**/
