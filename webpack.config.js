const isDevEnv = process.env.NODE_ENV === 'development';

if(isDevEnv) {
  module.exports = require('./build/webpack.dev');
}
else {
  module.exports = require('./build/webpack.prod');
}