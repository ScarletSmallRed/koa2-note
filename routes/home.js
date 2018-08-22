const Router = require("koa-router")

let home = new Router()

home.get("/", async ( ctx )=>{
  let html = `
    <ul>
      <li><a href="/page/helloworld">/page/helloworld</a></li>
      <li><a href="/page/404">/page/404</a></li>
    </ul>
  `
  ctx.body = html
})
  .post("/", async ctx => {
    let postData = ctx.request.body
    ctx.body = postData
  })

module.exports = home
