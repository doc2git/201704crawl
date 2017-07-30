/**
 * 使用此模块读取服务器的数据
 **/
let request = require('request');
let iconv = require('iconv-lite');
let cheerio = require('cheerio');
module.exports = function(url,callback){
  //读取url中的响应体,设置编码为null，不让自动转码
  request({url,encoding:null},function(err,response,body){
    let movies = [];
    if(!err && response.statusCode == 200){
      //把GBK格式的buffer对象解码成utf8字符串
      body = iconv.decode(body,'gbk');
      //把bodyHTML字段串转成jquery对象
      let $ = cheerio.load(body);
      //使用选择器选择出符合条件的DOM对象集合
      $('.keyword a.list-title').each(function(){
        let $this = $(this);//把当前的a标签变成jquery对象
        let movie = {
          name:$this.text(),//获取开始和结束标签之间的文本
          url:$this.attr('href')//获取href属性的值
        }
        console.log('读到电影:'+movie.name);
        movies.push(movie);
      })
      callback(null,movies);
    }else{
      callback(err,movies);
    }
  })
}
/*
let url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function(err,movies){
  console.log(movies);
});*/
