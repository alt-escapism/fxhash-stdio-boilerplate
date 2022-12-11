const config = require("./webpack.config");
const StdioWebpackPlugin = require("@altesc/stdio/webpack-plugin");

module.exports = {
  ...config,
  mode: "development",
  devServer: {
    // disables the Hot Module Replacement feature because probably not ideal
    // in the context of generative art
    // https://webpack.js.org/concepts/hot-module-replacement/
    hot: false,
    port: 8080,
    open: "/stdio",
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
      webSocketURL: {
        hostname: "localhost",
      },
    },
  },
  plugins: [...config.plugins, new StdioWebpackPlugin()],
};
