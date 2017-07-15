var fs = require('fs');

//readFile()
fs.readFile('../resource/Benz.jpg', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data.length + 'bytes');//255078bytes
    }
});

fs.readFile('../resource/text.txt', 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);//this is a test;
    }
});

//writeFile()
fs.writeFile('../resource/message.txt', 'this is another test', function (err) {
    if(err) throw err;
    console.log('it\'s saved');//it's saved
});

// //mkdir()
// fs.mkdir('../resource/dir',function(err){
//     if(err) throw err;
// });//在指定路径下创建了新目录dir

//readdir()
fs.readdir('../resource',function(err,files){
   if(err) {
       console.log(err);
       return;
   }

   console.log(files);//[ 'Benz.jpg', 'dir', 'message.txt', 'text.txt' ]
});

//fs.stat()
fs.stat('../resource',function(err,stats) {
    if(err) throw err;

    console.log(stats);//返回一个Stats对象
    console.log(stats.isFile());//false
    console.log(stats.isDirectory());//true
    console.log(stats.isBlockDevice());//false
    console.log(stats.isCharacterDevice());//false
    console.log(stats.isFIFO());//false
    console.log(stats.isSocket());//false
});