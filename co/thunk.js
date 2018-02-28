const fs = require('fs')

// thunk
let thunk = function (fn) {
    return function () {
        var args = Array.prototype.slice.call(arguments)
        return function (callback) {
            args.push(callback)
            fn.apply(this, args)
        }
    }
}

let read = thunk(fs.readFile)
let callback = function () { console.log('xxx') }
read('./co/thunkify.js')(callback)