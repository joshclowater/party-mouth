import io from 'socket.io-client';
import wildcard from 'socketio-wildcard';

import store from 'redux/store';

let socket;

export const initSocket = type => {
  if (socket === undefined) {
    const options = { query: { type } };
    if (process.env.NODE_ENV === 'development') {
      // Replace "localhost" with IP address for multiple device development
      socket = io('http://localhost:5000', options);
    } else {
      socket = io(options);
    }
    const patch = wildcard(io.Manager);
    patch(socket);
    socket.on('*', packet => {
      store.dispatch({
        type: packet.data[0],
        data: packet.data[1]
      });
    });
  } else {
    throw new Error('Socket is already defined', socket);
  }
};
