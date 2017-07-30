let app = require('express')();
let multer = require('multer');
let upload = multer({dest:'./upload'});
let path = require('path');
app.get('/',function(req,res){
  res.sendFile(path.resolve('./upload2.html'));
});
app.post('/upload',upload.single('avatar'),function(req,res){
  console.log(req.body);
  console.log(req.file);
  res.send('ok');
});
app.listen(8080);