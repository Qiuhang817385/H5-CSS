var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.header('Content-Type', 'text/html;charset=utf8');
    res.sendFile(path.resolve('index.html'));
});
app.get('/news', function (req, res) {
    res.header('Content-Type', 'text/html;charset=utf8');
    res.sendFile(path.resolve('index2.html'));
});
app.get('/content', function (req, res) {
    res.header('Content-Type', 'text/html;charset=utf8');
    res.sendFile(path.resolve('index3.html'));
});

var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('客户端1已经连接');
    // 监听接受客户端发过来的消息
    socket.on('message', function (msg) {
        console.log(msg);
        // socket.send(`服务器返回客户的信息:${msg}`);
        // 显示在客户端
        socket.send(`服务端回应好的老铁!`);
    });
    socket.on('disconect', function () {
        console.log('断开连接')
    })
    socket.on('error', () => {
        console.log('连接错误')
    })
});
io.of('/news').on('connection', socket => {
    console.log('客户端2已经连接');
    // 监听接受客户端发过来的消息
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send(`服务器说：${msg}`);
    });
    socket.on('disconect', function () {
        console.log('断开连接')
    })
    socket.on('error', () => {
        console.log('连接错误')
    })
});
io.of('/content').on('connection', socket => {
    console.log('客户端3已经连接');
    // 监听接受客户端发过来的消息
    socket.on('message', function (msg) {
        console.log(msg);
        socket.send(`服务器说：${msg}`);
    });
    socket.on('disconect', function () {
        console.log('断开连接')
    })
    socket.on('error', () => {
        console.log('连接错误')
    })
});




server.listen(80);
console.log("访问地址http://127.0.0.1:80");
console.log("访问地址http://127.0.0.1:80/" + "news");
console.log("访问地址http://127.0.0.1:80/" + "content");

/* 
function send(){
  var args = toArray(arguments);
  args.unshift('message');
  this.emit.apply(this, args);
  return this;
}
 */
