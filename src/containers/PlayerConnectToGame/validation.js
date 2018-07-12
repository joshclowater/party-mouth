import { isEmpty } from 'src/utils/string';

export default values => {
  const errors = {};
  if (isEmpty(values.get('gameId'))) {
    errors.gameId = 'Please enter a game id';
  } else if (values.get('gameId').length !== 5) {
    errors.gameId = 'Game id must be 5 characters';
  }
  if (isEmpty(values.get('name'))) {
    errors.name = 'Please enter a name';
  } else if (values.get('name').length > 12) {
    errors.name = 'Name must be less than 12 characters';
  }
  return errors;
};
