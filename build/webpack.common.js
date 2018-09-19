const path = require('path');
const isDevEnv = process.env.NODE_ENV === 'development';

const config = {
  entry: path.resolve(process.cwd(), 'src', 'App.tsx'),
  output: {
    filename: isDevEnv? 'app.bunble.js': 'app.[hash].bundle.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
