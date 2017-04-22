const webpack = require('webpack')
const { join } = require('path')

module.exports = {
  devtool: 'inline-source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client/index'
  ],

  output: {
    path: join(__dirname, '.build'),
    publicPath: 'http://localhost:3001',
    filename: 'client.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [
          join(__dirname, 'client'),
          join(__dirname, 'common')
        ]
      }
    ]
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'BUILD_TARGET': '"client"'
      }
    })
  ],

  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    hot: true
  }
}
