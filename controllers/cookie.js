exports.cookie_index = async ctx => {
  ctx.cookies.set(
    "cid",
    "hello world",
    {
      domain: "localhost",  // 写cookie所在的域名
      path: "/cookie",       // 写cookie所在的路径
      maxAge: 60 * 60 * 1000, // cookie有效时长
      // expires: new Date("2018-08-25"),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    }
  )
  ctx.body = "cookie is ok"
}

exports.session_set = async ctx => {
  ctx.session = {
    user_id: Math.random().toString(36).substr(2),
    count: 0
  }
  ctx.body = ctx.session
}

exports.session_get = async ctx => {
  ctx.session.count = ctx.session.count + 1
  ctx.body = ctx.session
}
