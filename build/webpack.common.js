const path = require('path');
const isDevEnv = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootDir = process.cwd();

const config = {
  entry: path.resolve(rootDir, 'src', 'App.tsx'),
  output: {
    filename: isDevEnv? 'app.bunble.js': 'app.[hash].bundle.js',
    path: path.resolve(rootDir, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevEnv? '[name].bundle.css': '[name].[hash].bundle.css',
      chunkFilename: isDevEnv? '[id].chunk.css': '[id].[hash].chunk.css'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(rootDir, 'src', 'index.html'),
      minify: {
        collapseWhitespace: true,
      },
      showErrors: isDevEnv
    })
  ],
  devServer: {
    contentBase: path.join(rootDir, 'dist'),
    compress: true,
    port: 4200
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          isDevEnv? 'style-loader': MiniCssExtractPlugin.loader,
          { 
            loader: 'css-loader',
            options: { sourceMap: isDevEnv }
          },
          'postcss-loader',
          { 
            loader: 'sass-loader',
            options: { sourceMap: isDevEnv }
          }
        ]
      }
    ]
  }
};

module.exports = config;
