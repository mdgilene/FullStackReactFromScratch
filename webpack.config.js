const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", "./client/src/index.js"],
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [path.resolve("./client/src"), path.resolve("./node_modules")]
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_VERSION: JSON.stringify(require("./package.json").version)
    })
  ],
  devServer: {
    contentBase: "./public",
    port: 5000,
    open: true,
    historyApiFallback: true
  }
};
