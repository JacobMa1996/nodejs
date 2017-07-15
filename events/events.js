var EventEmitter = require('events').EventEmitter;

var life = new EventEmitter();

life.setMaxListeners(12);

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求安慰', function (who) {
    console.log('给' + who + '倒水');
});

life.on('求溺爱', function (who) {
    console.log('给' + who + '买包包');
});


var haslistener = life.emit('求溺爱','妹子');

console.log(haslistener);

life.emit('求安慰', '汉子');
