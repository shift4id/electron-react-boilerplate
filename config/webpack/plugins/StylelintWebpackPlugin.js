const StylelintWebpackPlugin = require("stylelint-webpack-plugin");

module.exports = new StylelintWebpackPlugin({
  failOnError: false,
  files: "**/*.jsx",
  fix: true,
});
