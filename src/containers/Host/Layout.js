import React, { Component } from 'react';
import styled from 'styled-components';
import { initSocket } from 'src/socket';

import HostWaitingForPlayersToConnect from 'src/containers/HostWaitingForPlayersToConnect';
import CenteredComponent from 'src/components/Centered';
import ConnectingToServer from 'src/components/ConnectingToServer';

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
      content = <ConnectingToServer />;
    } else if (this.props.status === 'waiting-for-players-to-connect') {
      content = <HostWaitingForPlayersToConnect />;
    } else {
      throw new Error('invalid status', this.props.status);
    }
    return <CenteredScreen>{content}</CenteredScreen>;
  }
}
