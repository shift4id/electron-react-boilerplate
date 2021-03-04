const paths = require("../paths");

const loaders = require("./loaders");
const plugins = require("./plugins");

module.exports = {
  entry: [
    "core-js",
    "regenerator-runtime/runtime",
    `${paths.src}/renderer/index.jsx`,
  ],
  output: {
    path: paths.build,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.FontLoader,
      loaders.ImageLoader,
      loaders.SVGLoader,
    ],
  },
  name: "react",
  plugins: [
    plugins.HtmlWebpackPlugin,
    plugins.MiniCssExtractPlugin,
    plugins.ESLintWebpackPlugin,
    plugins.StylelintWebpackPlugin,
  ],
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  target: "electron-renderer",
};
