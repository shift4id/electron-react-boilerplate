const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");

module.exports = new ImageMinimizerWebpackPlugin({
  test: /\.(jpe?g|png|gif|svg)$/i,
  minimizerOptions: {
    plugins: ["gifsicle", "jpegtran", "optipng"],
  },
});
