var fs = require('fs');

var rs = fs.createReadStream('../resource/readable.txt','utf-8');

var ws = fs.createWriteStream('../resource/writable.txt','utf-8');

// ws.write(new Buffer('使用Stream写入二进制数据...\n'),'utf-8');
// ws.write(new Buffer('end'),'utf-8');
// ws.end();

rs.pipe(ws);

rs.on('data',function(chunk) {
    console.log('DATA:');
    console.log(chunk);//this is a readableStream   这是一个可读流
});
rs.on('end',function() {
    console.log('end');//使用Stream写入二进制数据... end
});
rs.on('error',function(err) {
    console.log('ERROR:' + err);
});