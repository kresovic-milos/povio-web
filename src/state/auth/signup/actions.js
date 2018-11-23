import { createAction } from 'redux-actions';

export const SIGN_UP = '[AUTH] SignUp';
export const signUp = createAction(SIGN_UP);

export const SIGN_UP_SUCCESS = `${SIGN_UP} success`;
export const signUpSuccess = createAction(SIGN_UP_SUCCESS);

export const SIGN_UP_FAIL = `${SIGN_UP} fail`;
export const signUpFail = createAction(SIGN_UP_FAIL);
