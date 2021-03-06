const path = require("path");
const isDevEnv = process.env.NODE_ENV === "development";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rootDir = process.cwd();

const config = {
  entry: path.resolve(rootDir, "src", "App.tsx"),
  output: {
    filename: isDevEnv ? "app.bunble.js" : "app.[hash].bundle.js",
    path: path.resolve(rootDir, "dist")
  },
  resolve: {
    extensions: [".tsx", ".js", ".json", ".ts"]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevEnv ? "[name].bundle.css" : "[name].[hash].bundle.css",
      chunkFilename: isDevEnv ? "[id].chunk.css" : "[id].[hash].chunk.css"
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, "src", "index.html"),
      minify: {
        collapseWhitespace: true
      },
      showErrors: isDevEnv
    })
  ],
  devServer: {
    contentBase: path.join(rootDir, "dist"),
    compress: true,
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules|setupEnzyme.ts/
      },
      {
        test: /\.scss$/,
        use: [
          isDevEnv ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: isDevEnv }
          },
          "postcss-loader",
          {
            loader: "sass-loader",
            options: { sourceMap: isDevEnv }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/"
            }
          }
        ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000,
              name: "[name]-[hash].[ext]"
            }
          }
        ]
      }
    ]
  }
};

module.exports = config;
