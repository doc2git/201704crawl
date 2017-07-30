let read = require('./read');
let write = require('./write');
let async = require('async');
let Movie = require('../model');
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
async.waterfall([
  function(next){
    //先清空数据库
    Movie.remove({},next);//callback(null,result)
  },
  function(data,next){
    read(url,next);//next(null,movies)
  },
  function(movies,next){
   write(movies,next);
  }
],function(err){
  console.log('All Done');
});