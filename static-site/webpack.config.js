'use strict'

const path = require('path')
const validate = require('webpack-validator')
const HtmlPlugin = require('html-webpack-plugin')
const SPAPlugin = require('./plugins/spa-webpack-plugin')

module.exports = validate({
  entry: {
    main: path.join(__dirname, 'src', 'index'),
    server: path.join(__dirname, 'src', 'server')
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: path.join('.', 'js', '[name].js'),
    libraryTarget: 'umd'
  },

  plugins: [
    new SPAPlugin(),
    new HtmlPlugin({
      title: 'My static site',
      inject: false,
      template: path.join(__dirname, 'src', 'html', 'template.html')
    })
  ]
})
