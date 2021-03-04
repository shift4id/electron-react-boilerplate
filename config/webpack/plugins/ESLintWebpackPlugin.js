const ESLintPlugin = require("eslint-webpack-plugin");

module.exports = new ESLintPlugin({
  failOnError: false,
  fix: true,
});
