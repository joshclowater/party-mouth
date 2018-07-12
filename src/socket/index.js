import io from 'socket.io-client';
import wildcard from 'socketio-wildcard';
import { startSubmit } from 'redux-form/immutable';

import store from 'src/redux/store';

let socket;

export const initSocket = role => {
  if (socket === undefined) {
    const options = { query: { role, id: Math.random() } };
    if (process.env.NODE_ENV === 'development') {
      // Replace "localhost" with IP address for local multi device development
      socket = io('http://localhost:5000', options);
    } else {
      socket = io(options);
    }
    const patch = wildcard(io.Manager);
    patch(socket);
    socket.on('*', packet => {
      store.dispatch({
        type: packet.data[0],
        ...packet.data[1]
      });
    });
  } else {
    throw new Error('Socket is already defined', socket);
  }
};

export const connectToGame = values => {
  store.dispatch(startSubmit('playerConnectToGame'));
  socket.emit('CONNECT_TO_GAME', values);
};
