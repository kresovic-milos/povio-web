import { all, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { USERS_PAGE } from '../../constants';
import { LOGOUT } from './actions';
import LocalStorage from '../../services/LocalStorage';

export function* logout$() {
  LocalStorage.remove('token');
  yield put(push(USERS_PAGE));
}

export default function*() {
  yield all([takeEvery(LOGOUT, logout$)]);
}
