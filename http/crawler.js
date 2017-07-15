var http = require('http');

var url = 'http://www.imooc.com';

var html = '';

http.get(url, function (res) {

    res.on('data',function(chunk) {
        html += chunk;
    });

});

var server = http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(html);
    res.end();
});

server.listen(1234);