const middleware = require('socketio-wildcard')();
const store = require('./redux/store')();

module.exports = function(io) {
  io.use(middleware);
  io.on('connection', function(socket) {
    const { role, id } = socket.handshake.query;
    store.dispatch({
      type: 'CONNECTION',
      role,
      id,
      socket
    });
    socket.on('*', function(packet) {
      console.log('* packet', packet.data[0], packet.data[1]);
      store.dispatch({
        type: packet.data[0],
        role,
        id,
        socket,
        ...packet.data[1]
      });
    });
    socket.on('disconnect', function () {
      console.log('TODO disconnect', role, id);
      store.dispatch({
        type: 'DISCONNECT',
        role,
        id
      });
    });
  });
}
