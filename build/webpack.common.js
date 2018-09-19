const path = require('path');
const isDevEnv = process.env.NODE_ENV === 'development';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: path.resolve(process.cwd(), 'src', 'App.tsx'),
  output: {
    filename: isDevEnv? 'app.bunble.js': 'app.[hash].bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isDevEnv? '[name].bundle.css': '[name].[hash].bundle.css',
      chunkFilename: isDevEnv? '[id].chunk.css': '[id].[hash].chunk.css'
    })
  ],
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
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
};

module.exports = config;
