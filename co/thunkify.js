const fs = require('fs')

// fs.readFile('./co/thunkify.js', function (err, data) {
//     if (err) return console.log(err)
//     console.log(data)
// })

let callback = function () { console.log('xxx') }

//thunkify
let thunkify = function (fn) {
    return function () {
        let args = Array.prototype.slice.call(arguments)
        let ctx = this

        return function (done) {
            let called = false
            args.push(function () {
                if (called) return
                called = true
                done.apply(null, arguments)
            })
            try {
                fn.apply(ctx, args)
            } catch (err) {
                done(err)
            }
        }

    }
}

let read2 = thunkify(fs.readFile)
read2('./co/thunkify.js')(callback)
