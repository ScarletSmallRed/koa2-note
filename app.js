const Koa = require("koa")
const logger = require("koa-logger")
const Router = require("koa-router")
const homeRoutes = require("./routes/home")
const pageRoutes = require("./routes/pages")
const cookieRoutes = require("./routes/cookie")
const bodyParser = require("koa-bodyparser")
const staticServer = require("koa-static")
const path = require("path")
const session = require("koa-session")
const sessionCONFIG = require("./config/session-setup")
const keys = require("./config/keys")

require("./config/session-setup")

const router = new Router()
const app = new Koa()
const staticPath = "./static"

app.use(staticServer(
  path.join(__dirname, staticPath)
))
app.use(logger())
app.use(bodyParser())
app.keys = keys.server.keys
app.use(session(sessionCONFIG, app))
router.use("/", homeRoutes.routes(), homeRoutes.allowedMethods())
router.use("/pages", pageRoutes.routes(), pageRoutes.allowedMethods())
router.use("/cookie", cookieRoutes.routes(), cookieRoutes.allowedMethods())
app.use(router.routes()).use(router.allowedMethods())

app.use(async ctx => {
  ctx.body = "<h1>404！！！ o(╯□╰)o</h1>"
})

app.listen(3000, () => {
  console.log("[demo] route-use-middleware is starting at port 3000") // eslint-disable-line no-console
})
// console.log("[demo] start-quick is starting at port 3000")
