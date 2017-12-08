const Koa = require('koa')
const router = require('./router.js')
const cors = require('koa2-cors')
const app = new Koa()

app.use(cors())
app.use(router['routes']())

app.use( async (ctx) => {
  ctx.res.writeHead(200, {'Content-Type': 'text/plain;charset=utf-8'})
  ctx.res.write('')
  ctx.res.end()
})

app.listen(3000, () => console.log('[demo] static-server is starting at port 3000'))