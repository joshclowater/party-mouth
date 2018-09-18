import React, { Component } from 'react';
import styled from 'styled-components';
import { initSocket } from 'src/socket';

import CenteredComponent from 'src/components/Centered';
import LoadingMessage from 'src/components/LoadingMessage';
import WaitingForPlayersToConnect from './WaitingForPlayersToConnect';

const CenteredScreen = styled(CenteredComponent)`
  height: 100vh;
`;

export default class Host extends Component {
  componentDidMount() {
    initSocket('host');
  }

  render() {
    let content;
    if (this.props.status === 'connecting-to-server') {
      content = <LoadingMessage message="Connecting to server" />;
    } else if (this.props.status === 'waiting-for-players-to-connect') {
      content = <WaitingForPlayersToConnect />;
    } else if (this.props.status === 'starting-game') {
      content = <LoadingMessage message="Starting game" />;
    } else if (this.props.status === 'game-started') {
      content = 'TODO Game started';
    } else {
      throw new Error('invalid status', this.props.status);
    }
    return <CenteredScreen>{content}</CenteredScreen>;
  }
}
