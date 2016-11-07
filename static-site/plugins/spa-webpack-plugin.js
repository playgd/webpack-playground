'use strict'

function SPAWebpackPlugin (options) {}

const beforeHtml = (htmlPluginData, callback) => {
  const serverCode = require('../build/js/server')
  htmlPluginData.html = htmlPluginData.html.replace('<!-- server -->', serverCode)
  callback(null, htmlPluginData)
}

const handleCompilation = (compilation) => {
  compilation.plugin('html-webpack-plugin-before-html-processing', beforeHtml)
}

SPAWebpackPlugin.prototype.apply = function (compiler) {
  compiler.plugin('compilation', handleCompilation)
}

module.exports = SPAWebpackPlugin
