import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as form } from 'redux-form';
import appBar from './appBar/reducer';
import auth from './auth/reducer';
import users from './users/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    appBar,
    auth,
    users,
    form
  });
