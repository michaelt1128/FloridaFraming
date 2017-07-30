/* Web pack */
var ComponentDirectoryPlugin = require("component-directory-webpack-plugin");
var path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/admin',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [new ComponentDirectoryPlugin(true)],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        loader: 'babel-loader'
      },{
        test: /\.(png|jpg)$/,
        loader: 'file-loader?name=images/[name].[ext]'
      },{
        test: /\.scss$/,
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      },{
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },{ test: /\.css$/, loader: ['style-loader', 'css-loader'] }
    ]
  },
  performance: { hints: false },
  resolve: {
    alias: {
      shared: path.resolve(__dirname, 'src/shared'),
      areas: path.resolve(__dirname, 'src/areas'),
      reduxStore: path.resolve(__dirname, 'src/reduxStore')
    },
    extensions: ['.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};//Webpack


