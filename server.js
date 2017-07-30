let express = require('express');
let Movie = require('./model');
let app = express();
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
app.get('/',function(req,res){
  Movie.find({},function(err,movies){
    res.render('index',{movies});
  });
});
app.listen(8080);