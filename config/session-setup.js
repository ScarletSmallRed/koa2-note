const mongoStore = require("koa-session-mongo2")
const connectCONFIG = require("./keys")

const CONFIG = {
  store: new mongoStore({
    url: connectCONFIG.mongoDB.dbURI,
    db: connectCONFIG.mongoDB.db,
    signed: false,
    maxAge: 60 * 60 * 1000
  }),
  httpOnly: false,
  signed: true,
  maxAge: 60 * 60 * 1000
}

module.exports = CONFIG
