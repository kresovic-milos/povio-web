import { handleActions } from 'redux-actions';
import * as actions from './actions';
import initialState from './initialState';

export default handleActions(
  new Map([
    [
      actions.login,
      state => ({
        ...state,
        inProgress: true
      })
    ],
    [
      actions.loginFail,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        ...(payload && payload.error ? { error: payload } : {})
      })
    ],
    [
      actions.clearLoginState,
      state => ({
        ...state,
        error: null
      })
    ]
  ]),
  { ...initialState }
);
