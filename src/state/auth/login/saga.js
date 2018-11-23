import { all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import Http from '../../../services/Http';
import { LOGIN_PATH, USERS_PAGE } from '../../../constants';
import * as actions from './actions';
import LocalStorage from '../../../services/LocalStorage';

export function* login$({ payload: { data } }) {
  try {
    const response = yield Http.post(LOGIN_PATH, data);
    yield put(actions.loginSuccess(response.data));
    LocalStorage.set('token', response.data.data.token);
    yield put(push(USERS_PAGE));
  } catch ({ response: { error } }) {
    yield put(actions.loginFail({ error }));
  }
}

export default function*() {
  yield all([takeEvery(actions.LOGIN, login$)]);
}
