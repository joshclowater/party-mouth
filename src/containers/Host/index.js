import React, { Component } from 'react';
import io from 'socket.io-client';

export default class Host extends Component {
  componentDidMount() {
    let socket;
    const options = { query: { type: 'host' } };
    if (process.env.NODE_ENV === 'development') {
      socket = io('http://localhost:5000', options);
    } else {
      socket = io(options);
    }
    socket.on('connected', (response) => console.log('connected', response));
  }

  render() {
    return (
      <div>
        TODO Host
      </div>
    );
  }
}
