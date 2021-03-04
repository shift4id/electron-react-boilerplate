const { loader } = require("mini-css-extract-plugin");

module.exports = {
  test: /\.(sc|c)ss$/i,
  exclude: /node_modules/,
  use: [loader, "css-loader", "postcss-loader"],
};
