'use strict'

class SPAWebpackPlugin {
  apply (compiler) {
    compiler.plugin('compilation', handleCompilation)
  }
}

const handleCompilation = (compilation) => {
  compilation.plugin('html-webpack-plugin-before-html-processing', beforeHtml)
}

const beforeHtml = (htmlPluginData, callback) => {
  const serverCode = require('../build/js/server')
  htmlPluginData.html = htmlPluginData.html.replace('<!-- server -->', serverCode)
  callback(null, htmlPluginData)
}

module.exports = SPAWebpackPlugin
