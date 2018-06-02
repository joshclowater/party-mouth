import React, { Component } from 'react';
import io from 'socket.io-client';

export default class Play extends Component {
  componentDidMount() {
    let socket;
    const options = { query: { type: 'player' } };
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
        TODO Play
      </div>
    );
  }
}
