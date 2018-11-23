import { all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Http from '../../../services/Http';
import { SIGNUP_PATH, LOGIN_PAGE } from '../../../constants';
import * as actions from './actions';

export function* signup$({ payload: { data } }) {
  try {
    const reqData = { ...data, avatarUrl: 'http://i.pravatar.cc/200' };
    const response = yield Http.post(SIGNUP_PATH, reqData);
    yield put(actions.signUpSuccess(response.data));
    yield put(push(LOGIN_PAGE));
  } catch ({ response: { error } }) {
    yield put(actions.signUpFail({ error }));
  }
}

export default function*() {
  yield all([takeEvery(actions.SIGN_UP, signup$)]);
}
