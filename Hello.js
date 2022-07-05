
var http = require('http')

http.createServer(function (req, res) {
  console.log('Opa!!!')
  console.log(req.url)
  res.write('Opa, passou pelo back - end!!!')
  res.end()

}).listen(3000);
