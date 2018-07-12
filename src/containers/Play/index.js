import { connect } from 'react-redux';

import Layout from './Layout';

import { getStatus } from 'src/redux/Game/selectors';

export function mapStateToProps(state) {
  return {
    status: getStatus(state)
  };
}

export default connect(mapStateToProps)(Layout);
