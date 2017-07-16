var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

    console.log(req.method);

    res.writeHead('200',{'Content-Type':'text/plain'});
    res.write('connect');
    res.end();

    console.log(url.parse(req.url));
});

var url1 = 'http://user:pass@host.com:8080/path/to/file?query=string#hash';

console.log(url.parse(url1));

server.listen(2000);
