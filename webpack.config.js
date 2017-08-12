const webpack = require('webpack')
const path    = require('path')

var plugins = []
if (process.env.NODE_ENV === 'production') {
  plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}

module.exports = {
  entry: {
    'vue-assign-model': './src/vue-assign-model.js'
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    library: 'VueAssignModel',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins
}
