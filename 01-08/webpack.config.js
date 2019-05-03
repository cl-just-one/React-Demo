const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  // 配置loader
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/, //对这个不做处理
      use: {
        loader: "babel-loader"
      }
    }]
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
		new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html'
    }),		
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,   // 指定服务启动在 9000 端口
    inline: true,  // inline 模式启动
    open: true  // 执行webpack-dev-server 后自动打开浏览器
  }
};
