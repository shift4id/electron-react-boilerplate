const { merge } = require("webpack-merge");

const loaders = require("./loaders");
const plugins = require("./plugins");
const common = require("./webpack.config.renderer.base");

module.exports = merge(common, {
  devtool: false,
  mode: "production",
  module: {
    rules: [loaders.JSLoader.PROD],
  },
  optimization: {
    minimizer: ["...", plugins.CssMinimizerWebpackPlugin],
  },
  plugins: [plugins.ImageMinimizerWebpackPlugin],
});
