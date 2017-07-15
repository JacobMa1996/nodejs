//global
console.log(global);//
console.log(global.console);//

console.log(global.process);//true
console.log(process == global.process);//

//global.process
process.nextTick(function() {
    console.log('下一轮Event Loop即将开始');//会在下一轮事件循环开始前调用
});


setTimeout(function(){
    console.log('已经到了下一轮事件循环');//下一轮事件循环开始时调用
},0);

console.log(1);//1 '下一轮...' '已经到了...'

process.on('exit',function() {
    console.log('进程即将退出');//只能添加同步事件，在当前进程结束前调用
});

process.on('exit',function() {
    setTimeout(function(){
        console.log('异步事件无效，进程已退出');
    },0)
});