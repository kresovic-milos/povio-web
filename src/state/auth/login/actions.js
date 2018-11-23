import { createAction } from 'redux-actions';

// login
export const LOGIN = '[AUTH] Login';
export const login = createAction(LOGIN);

export const LOGIN_FAIL = `${LOGIN} fail`;
export const loginFail = createAction(LOGIN_FAIL);

export const LOGIN_SUCCESS = `${LOGIN} success`;
export const loginSuccess = createAction(LOGIN_SUCCESS);

export const CLEAR_LOGIN_STATE = `${LOGIN} clear state`;
export const clearLoginState = createAction(CLEAR_LOGIN_STATE);
