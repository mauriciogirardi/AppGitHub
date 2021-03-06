const webpack = require("webpack");
const validate = require("webpack-validator");
const HtmlPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require("./common");

module.exports = validate({
  entry: common.entry,

  output: common.output,

  plugins: [
    new ExtractTextPlugin("[name]-[hash].css"),

    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"procuction"'
      }
    }),

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin(common.htmlPluginConfig("template.html")),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],

  module: {
    /* preLoaders: [common.standardPreLoaders],*/

    loaders: [
      common.jsLoaders,
      Object.assign({}, common.cssLoader, {
        loaders: undefined,
        loader: ExtractTextPlugin.extract.apply(
          ExtractTextPlugin,
          common.cssLoader.loaders
        )
      })
    ]
  },
  resolve: common.resolve
});
