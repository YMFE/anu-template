require('babel-register')({presets: ['es2015', 'react']})
const koaRouter = require('koa-router')
const fs = require('fs')
const router = koaRouter()
const config = require('./react_config.js')
const React = config.React
const { renderToString } = config.renderToString
const Content = require('./template.jsx')

const { match, RouterContext } = require('react-router')
const routers = require('../client/src/Routes.js')

// console.log(routers)


router.get('/index', async (ctx, next) => {
  ctx.response.type = 'plain'
  ctx.body = renderToString(Content)
})

module.exports = router
