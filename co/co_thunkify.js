const thunkify = require('thunkify')
const fs = require('fs')

let read = thunkify(fs.readFile)

read('./package.json')(function (err, data) {
    if (err) return console.log(err)
    // console.log(data.toString())
})

let gen = function* () {
    let val1 = yield read('./package.json')
    console.log('val1')
    let val2 = yield read('./package.json')
    console.log('val2')
}

let g = gen()
// console.log(g.next().value(function() {}))
// g.next()
// g.next()
// g.next()

// g.next().value(function (err, data) {
//     g.next().value(function (err, data) {
//         g.next()
//     })
// })

// thunkify的co
let run = function(gen) {
    let g = gen()

    let _next = function (err, data) {
        let result = g.next(data)
        if(result.done) return
        result.value(_next)
    }

    _next()
}

run(gen)
