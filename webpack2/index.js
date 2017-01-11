'use strict'

const glob = require('glob')
const allInSrc = glob.sync('src/**/*.js')
const entryPoints = allInSrc.map((f) => ({
  [f.replace(/\//g, '-').replace(/\.js$/, '')]: f
}))

console.log('allInSrc:', allInSrc)
console.log('entryPoints:', entryPoints)
