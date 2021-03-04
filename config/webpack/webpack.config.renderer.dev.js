const { spawn } = require("child_process");
const { merge } = require("webpack-merge");

const paths = require("../paths");

const loaders = require("./loaders");
const plugins = require("./plugins");
const common = require("./webpack.config.renderer.base");

const port = process.env.PORT || 8000;

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: {
    port,
    compress: true,
    hot: true,
    contentBase: paths.build,
    headers: { "Access-Control-Allow-Origin": "*" },
    historyApiFallback: true,
    after: () => {
      spawn("yarn main:dev", {
        shell: true,
        env: process.env,
        stdio: "inherit",
      })
        .on("close", (code) => process.exit(code))
        .on("error", (spawnError) => console.error(spawnError));
    },
  },
  mode: "development",
  module: {
    rules: [loaders.JSLoader.DEV],
  },
  plugins: [
    plugins.HotModuleReplacementPlugin,
    plugins.ReactRefreshWebpackPlugin,
  ],
  watchOptions: {
    ignored: ["build/**", "node_modules/**"],
  },
});
