import { all } from 'redux-saga/effects';
import login from './login/saga';
import signup from './signup/saga';

export default function*() {
  yield all([login(), signup()]);
}
