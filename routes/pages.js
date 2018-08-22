const Router = require("koa-router")
const upload = require("./../config/multer-setup")
const pageControllers = require("./../controllers/pages")

let page = new Router()

page
  .get("/404", async (ctx) => {
    ctx.body = "404 page!"
  })
  .get("/helloworld", async (ctx) => {
    ctx.body = "helloworld page!"
  })
  .post("/upload", upload.single("productImage"), pageControllers.page_upload)

module.exports = page
