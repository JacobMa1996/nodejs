const http = require('http')

let server = http.createServer((req, res) => {
    let url = req.url
    console.log(url)
    let num = url.split('?')[1]
    res.writeHead(200, {'Content-Type': 'application/json'})
    return res.end(JSON.stringify(num))
})

server.listen(8012)