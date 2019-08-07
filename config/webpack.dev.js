const merge = require("webpack-merge");
const common = require("./webpack.common");
const webpack = require("webpack");

module.exports = env => {
  return merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
      host: "192.168.2.13",
      contentBase: "./dist",
      hot: true,
      historyApiFallback: true,
      watchOptions: {
        //        ignored: /node_modules/,
        poll: 1000
      }
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(env.http)
      })
    ]
  });
};
