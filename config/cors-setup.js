const cors = require("koa2-cors")

module.exports = cors({
  origin: ctx => {
    return ctx.headers.origin
  },
  exposeHeaders: ["WWW-Authenticate", "Server-Authorization"],
  maxAge: 1000,
  credentials: true,
  allowMethods: ["GET", "POST", "DELETE"],
  allowHeaders: ["Content-Type", "Authorization", "Accept", "X-Requested-With", "Origin"],
})
