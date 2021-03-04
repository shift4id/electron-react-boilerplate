const HtmlWebpackPlugin = require("html-webpack-plugin");

const paths = require("../../paths");

module.exports = new HtmlWebpackPlugin({
  filename: "index.html",
  inject: "body",
  publicPath: "./",
  template: `${paths.src}/renderer/index.html`,
});
