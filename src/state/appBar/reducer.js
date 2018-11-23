import { createAction, handleActions } from 'redux-actions';
import { LOCATION_CHANGE } from 'connected-react-router';
import initialState from './initialState';
import * as actions from '../actions';

const locationChange = createAction(LOCATION_CHANGE);

export default handleActions(
  new Map([
    [
      locationChange,
      (state, { payload: { location } }) => ({
        ...state,
        currentPage: location.pathname.substr(location.pathname.lastIndexOf('/') + 1)
      })
    ],
    [
      actions.loginSuccess,
      state => ({
        ...state,
        isLoggedIn: true
      })
    ],
    [
      actions.logout,
      state => ({
        ...state,
        isLoggedIn: false
      })
    ]
  ]),
  { ...initialState }
);
