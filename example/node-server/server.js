console.log(http);

var http = require("http");
var PORT = 8003;

http.createServer(function(req, res){
    console.log(req)
    res.end('hello node');        

}).listen(PORT);

console.log('you server is listened to ' + PORT)
