const merge = require("webpack-merge");
const common = require("./webpack.common");
const Uglify = require("uglifyjs-webpack-plugin");
const OptimizeCssAssets = require("optimize-css-assets-webpack-plugin");

const config = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [
      new Uglify({
        exclude: /node_modules/,
        sourceMap: false
      }),
      new OptimizeCssAssets({})
    ]
  }
});

module.exports = config;
