const isDevEnv = process.env.NODE_ENV === 'development';

module.exports = {
  sourceMap: isDevEnv,
  plugins: [
    require('precss'),
    require('autoprefixer')
  ]
}