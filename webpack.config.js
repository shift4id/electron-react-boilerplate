const mainConfig = require("./config/webpack/webpack.config.main");
const rendererDevConfig = require("./config/webpack/webpack.config.renderer.dev");
const rendererProdConfig = require("./config/webpack/webpack.config.renderer.prod");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = [
  mainConfig,
  isDevelopment ? rendererDevConfig : rendererProdConfig,
];
