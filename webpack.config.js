module.exports = {

  entry: ['babel-polyfill', 'whatwg-fetch', './app/app'],
  output: {
    path: __dirname + '/public/js',
    publicPath: __dirname + '/public/js/',
    filename: '[name].js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  devtool: 'source-map'

};