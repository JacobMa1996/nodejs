var c = 0;

function print() {
    console.log(c);
}

function plus(callback) {

    c += 1;

    callback();
}

plus(print);

