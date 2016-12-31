'use strict'

const path = require('path')
const validate = require('webpack-validator')
const HtmlPlugin = require('html-webpack-plugin')
const SPAPlugin = require('./plugins/spa-webpack-plugin')

const paths = {
  src: path.join(__dirname, 'src'),
  html: path.join(__dirname, 'src', 'html'),
  build: path.join(__dirname, 'build')
}

module.exports = validate({
  entry: {
    main: path.join(paths.src, 'index'),
    server: path.join(paths.src, 'server')
  },

  output: {
    path: paths.build,
    filename: path.join('.', 'js', '[name].js'),
    libraryTarget: 'umd'
  },

  plugins: [
    new SPAPlugin(),
    new HtmlPlugin({
      title: 'My static site',
      inject: false,
      template: path.join(paths.html, 'template.html')
    })
  ]
})
