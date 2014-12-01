var express = require('express');
var server = express();
server.use("/app",express.static(__dirname + "/"));
server.get('/rest/rentals', function(req, res){
  res.json([ { name: 'widget 1' } ]);
});
server.listen(3000);
console.log('Ready at http://localhost:3000/app/index.html');
