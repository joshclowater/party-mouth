const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const serveStatic = require('serve-static');
const game = require('./socket');

const app = express();
if (process.argv.length === 2) {
  // In production server, the express app will also serve the files.
  // Dev server will use webpack to hot reload and serve.
  app.use(serveStatic('./build'));
}
const httpServer = http.Server(app);

const io = socketIo(httpServer);
game(io);

const port = process.env.PORT || 5000;
httpServer.listen(port, () => {
  console.log('>> Express server listening on port:', port);
});
