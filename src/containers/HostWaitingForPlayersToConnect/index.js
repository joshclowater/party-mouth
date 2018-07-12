import { connect } from 'react-redux';

import Layout from './Layout';

import { getGameId, getPlayers } from 'src/redux/Game/selectors';

export function mapStateToProps(state) {
  return {
    gameId: getGameId(state),
    players: getPlayers(state)
  };
}

export default connect(mapStateToProps)(Layout);
