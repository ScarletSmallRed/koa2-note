const Router = require("koa-router")
const cookieControllers = require("./../controllers/cookie")

let cookieRouter = new Router()

cookieRouter.get("/", cookieControllers.cookie_index)
cookieRouter.get("/session/set", cookieControllers.session_set)
cookieRouter.get("/session/get", cookieControllers.session_get)

module.exports = cookieRouter
