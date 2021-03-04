const paths = require("../paths");

const loaders = require("./loaders");

module.exports = {
  entry: `${paths.src}/main/index.js`,
  name: "electron",
  target: "electron-main",
  resolve: {
    extensions: ["*", ".js", ".json"],
  },
  module: {
    rules: [loaders.JSLoader.PROD],
  },
  output: {
    path: paths.build,
    filename: "app.js",
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
