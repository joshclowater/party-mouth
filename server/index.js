var http = require('http');
var socketIo = require('socket.io');
var express = require('express');
var serveStatic = require('serve-static');
var game = require('./game');

const app = express();
if (process.argv.length === 2) {
  // In production server, the express app will also serve the files.
  // Dev server will use webpack to hot reload and serve.
  app.use(serveStatic('./build'));
}
var httpServer = http.Server(app);

var io = socketIo(httpServer);
game.initialiseGameSocketIo(io);

var port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log('>> Express server listening on port:', port);
});
