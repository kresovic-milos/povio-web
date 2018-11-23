import { handleActions } from 'redux-actions';

import { SIGN_UP, SIGN_UP_SUCCESS, SIGN_UP_FAIL } from './actions';
import initialState from './initialState';

export default handleActions(
  new Map([
    [
      SIGN_UP,
      state => ({
        ...state,
        inProgress: true
      })
    ],
    [
      SIGN_UP_SUCCESS,
      state => ({
        ...state,
        inProgress: false,
        success: true,
        fail: false
      })
    ],
    [
      SIGN_UP_FAIL,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        error: payload && payload.error ? payload.error : { message: 'unknown error' }
      })
    ]
  ]),
  { ...initialState }
);
