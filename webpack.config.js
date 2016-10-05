module.exports = {

  entry: ['babel-polyfill', 'whatwg-fetch', './src/app'],
  output: {
    path: __dirname + '/public/js',
    publicPath: 'http://localhost:8080/public/js/',
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

  devtool: 'source-map',

  plugins: [

  ]

};