var url = require('url');
var urlStr = 'http://user:pass@host.com:8080/path/to/file?query=string#hash';

console.log(url.parse(urlStr));

//输出
// Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: 'user:pass',
//     host: 'host.com:8080',
//     port: '8080',
//     hostname: 'host.com',
//     hash: '#hash',
//     search: '?query=string',
//     query: 'query=string',
//     pathname: '/path/to/file',
//     path: '/path/to/file?query=string',
//     href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }

console.log(url.parse(urlStr).pathname);///path/to/file

url.resolve('/one/two/three', 'four');         // '/one/two/four'
url.resolve('http://example.com/', '/one');    // 'http://example.com/one'
url.resolve('http://example.com/one', '/two'); // 'http://example.com/two'