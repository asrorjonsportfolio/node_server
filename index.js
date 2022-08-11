//http server
const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end('http server is working');
}

const server = http.createServer(requestListener);
server.listen(8080);