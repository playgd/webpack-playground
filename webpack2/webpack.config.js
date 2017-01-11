'use strict'

const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')
const glob = require('glob')

const allFiles = glob.sync('./src/**/*.js')

const getChunkName = (fileName) => {
  return fileName.replace('./src/', '').replace(/\.js$/, '')
}

const getFilesList = (acc, f) => Object.assign({}, acc, {
  [getChunkName(f)]: f
})

module.exports = {
  entry: allFiles.reduce(getFilesList, {}),

  output: {
    filename: 'dist/[name].js',
    library: '[name]',
    libraryTarget: 'amd'
  },

  plugins: allFiles.map((f) => (
    new CommonsChunkPlugin({
      name: getChunkName(f),
      chunks: [f]
    })
  ))
}
