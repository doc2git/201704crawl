let Movie = require('../model');
function write(movies, callback) {
  Movie.create(movies, callback)
}
module.exports = write;

write([{name:'1',url:'1'},{name:'2',url:'2'}],function(err,docs){
  console.log(docs);
});