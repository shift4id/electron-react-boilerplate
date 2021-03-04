const DEV = {
  test: /\.(js|jsx|mjs)$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      plugins: ["react-refresh/babel"],
    },
  },
};

const PROD = {
  test: /\.(js|jsx|mjs)$/i,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

module.exports = { PROD, DEV };
