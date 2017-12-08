const path = require('path')
const base = path.join(__dirname, '../')
const modules = `${base}node_modules/`
const alias = require(`${base}webpack/alias.js`)
const React = require(`${modules}${alias.react}.js`)
const renderToString = require(`${modules}${alias.ReactDOMServer}.js`)

module.exports = {
  React,
  modules,
  renderToString,
}