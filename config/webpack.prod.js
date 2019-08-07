const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const { StatsWriterPlugin } = require("webpack-stats-plugin");
const webpack = require("webpack");

module.exports = env => {
  return merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
      new StatsWriterPlugin({
        transform: function(data, opts) {
          let stats = opts.compiler.getStats().toJson({ chunkModules: true });
          return JSON.stringify(stats, null, 2);
        }
      }),
      new webpack.DefinePlugin({
        __DEV__: JSON.stringify(env.http)
      })
    ],
    optimization: {
      minimize: env.nolog === "true"
    }
  });
};
