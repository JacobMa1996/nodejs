var path = require('path');

console.log(path.join('/foo','bar','baz/asdf','..'));// \foo\bar\baz
// console.log(path.join('/foo',{},'bar'));// 抛出 'TypeError: Path must be a string. Received {}'

console.log(path.resolve('/foo/bar','./baz'));// C:\foo\bar\baz
console.log(path.resolve('/foo/bar','/tmp/file/'));// C:\tmp\file
console.log(path.resolve('wwwroot','static_files/png/','../gif/image.gif'));//C:\Users\Matthew\Desktop\nodejs\url\wwwroot\static_files\gif\image.gif
