import { connect } from 'react-redux';

import Layout from './Layout';

export function mapStateToProps(state) {
  return {
    status: state.game.status
  };
}

export default connect(mapStateToProps)(Layout);
