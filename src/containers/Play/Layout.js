import React, { Component } from 'react';
import styled from 'styled-components';
import { initSocket } from 'src/socket';

import CenteredComponent from 'src/components/Centered';
import ConnectingToServer from 'src/components/ConnectingToServer';
import PlayerConnectToGame from 'src/containers/PlayerConnectToGame';

const CenteredScreen = styled(CenteredComponent)`
  height: 100vh;
`;

export default class Play extends Component {
  componentDidMount() {
    initSocket('player');
  }

  render() {
    let content;
    if (this.props.status === 'connecting-to-server') {
      content = <ConnectingToServer />;
    } else if (this.props.status === 'waiting-to-join') {
      content = <PlayerConnectToGame />;
    } else if (this.props.status === 'waiting-for-game-start') {
      content = 'Connected. Waiting for game to start.';
    } else {
      throw new Error('invalid status', this.props.status);
    }
    return <CenteredScreen>{content}</CenteredScreen>;
  }
}
