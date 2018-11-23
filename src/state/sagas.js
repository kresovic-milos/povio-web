import { all } from 'redux-saga/effects';
import appBar from './appBar/saga';
import auth from './auth/saga';
import mostLiked from './users/saga';

export default function*() {
  yield all([appBar(), auth(), mostLiked()]);
}
