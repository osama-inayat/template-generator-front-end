/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
// const proxy = require("http-proxy-middleware");

module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
