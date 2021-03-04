const { HotModuleReplacementPlugin } = require("webpack");

module.exports = new HotModuleReplacementPlugin({
  multiStep: true,
});
