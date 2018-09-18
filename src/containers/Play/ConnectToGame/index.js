import { reduxForm } from 'redux-form/immutable';
import PlayerConnectToGameComponent from './Layout';
import { connectToGame } from 'src/socket';
import validate from './validation';

export default reduxForm({
  form: 'playerConnectToGame',
  onSubmit: connectToGame,
  validate
})(PlayerConnectToGameComponent);
