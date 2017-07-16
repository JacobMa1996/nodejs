var http = require('http');

var url = 'http://www.imooc.com';

http.get(url,function(res) {
    var html = '';

    res.on('data',function(data) {
        html += data;//输出慕课网的html代码
    });

    res.on('end',function () {
        console.log(html);
    })
}).on('error',function() {
    console.log('获取错误');
});