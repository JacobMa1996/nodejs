const fs = require('fs')

let read = function (fileName) {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, function (err, data) {
            if (err) return err
            resolve(data)
        })
    })
}

let gen = function* () {
    let f1 = yield read('./package.json')
    console.log('f1')
    let f2 = yield read('./package.json')
    console.log('f2')
}

// let g = gen()
// g.next().value.then(function (err, data) {
//     g.next(data).value.then(function (err, data) {
//         g.next(data)
//     })
// })

//promise实现的co
function run(gen) {
    let g = gen()
    function _next(data) {
        let result = g.next(data)
        if (result.done) return result.value
        result.value.then(function (err, data) {
            _next(data)
        })
    }
    _next()
}

run(gen)

