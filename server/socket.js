const middleware = require('socketio-wildcard')();
const store = require('./redux/store')();

module.exports = function(io) {
  io.use(middleware);
  io.on('connection', function(socket) {
    const { role, id } = socket.handshake.query;
    console.log('CONNECTION', role, id);
    store.dispatch({
      type: 'CONNECTION',
      role,
      id,
      socket
    });
    socket.on('*', function(packet) {
      console.log(packet.data[0], role, id, packet.data[1]);
      store.dispatch({
        type: packet.data[0],
        role,
        id,
        socket,
        ...packet.data[1]
      });
    });
    socket.on('disconnect', function () {
      console.log('DISCONNECT', role, id);
      store.dispatch({
        type: 'DISCONNECT',
        id
      });
    });
  });
}
