import { connect } from 'react-redux';

import Layout from './Layout';

export function mapStateToProps(state) {
  return {
    gameId: state.game.gameId,
    players: state.game.players
  };
}

export default connect(mapStateToProps)(Layout);
