import React, { Component } from 'react';
import { initSocket } from 'socket';

export default class Host extends Component {
  componentDidMount() {
    initSocket('host');
  }

  render() {
    return <div>TODO Host</div>;
  }
}
