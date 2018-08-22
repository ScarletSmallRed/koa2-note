const Router = require("koa-router")
const cookieControllers = require("./../controllers/cookie")

let cookieRouter = new Router()

cookieRouter.get("/", cookieControllers.cookie_index)

module.exports = cookieRouter
