import React, { Component } from 'react';
import { initSocket } from 'socket';

export default class Play extends Component {
  componentDidMount() {
    initSocket('player');
  }

  render() {
    return <div>TODO Play</div>;
  }
}
