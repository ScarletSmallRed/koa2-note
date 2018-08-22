const session = require("koa-session-minimal")
const MysqlSession = require("koa-mysql-session")
const Koa = require("koa")
const CONFIG = require("./keys")

let store = new MysqlSession(CONFIG.mySQL)

let cookie = {
  domain: "localhost",  // 写cookie所在的域名
  path: "/cookie",       // 写cookie所在的路径
  maxAge: 60 * 60 * 1000, // cookie有效时长
  // expires: new Date("2018-08-25"),  // cookie失效时间
  httpOnly: false,  // 是否只用于http请求中获取
  overwrite: false  // 是否允许重写
}

const app = new Koa()

app.use(session({
  key: "SESSION_ID",
  store: store,
  cookie: cookie
}))
