exports.initialiseGameSocketIo = function(io) {
  io.on('connection', function(socket) {
    console.log('hello socket', socket.id, socket.handshake.query.type);
    const type = socket.handshake.query.type;
    if (type === 'host') {
      socket.emit('connected', { type });
    } else if (type === 'player') {
      socket.emit('connected', { type });
    }
  });
};