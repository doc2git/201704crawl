//引入mongoose模块
let mongoose = require('mongoose');
//创建连接对象
let conn = mongoose.createConnection('mongodb://127.0.0.1/201704crawl');
// Movie是模型的名称
module.exports = conn.model('Movie',new mongoose.Schema({
  name:String,
  url:String
}));