import { all, put, takeLatest } from 'redux-saga/effects';
import Http from '../../services/Http';
import { MOST_LIKED_PATH, LIKE_PATH, UNLIKE_PATH } from '../../constants';
import * as actions from './actions';

export function* fetchMostLiked$() {
  try {
    const response = yield Http.get(MOST_LIKED_PATH);
    const {
      data: { users }
    } = response.data;

    const mostLiked = users.reduce((obj, user) => {
      const key = `_${user.id}`;
      // eslint-disable-next-line no-param-reassign
      obj[key] = user;
      return obj;
    }, {});

    yield put(actions.fetchMostLikedSuccess(mostLiked));
  } catch ({ response: { error } }) {
    yield put(actions.fetchMostLikedFail({ error }));
  }
}

export function* likeUser$({ payload }) {
  try {
    const response = yield Http.post(LIKE_PATH(payload));
    const {
      data: { likedUser }
    } = response.data;

    yield put(actions.likeUserSuccess({ likedUser }));
  } catch ({ response: { error } }) {
    yield put(actions.likeUserFail({ error }));
  }
}

export function* unlikeUser$({ payload }) {
  try {
    const response = yield Http.post(UNLIKE_PATH(payload));
    const {
      data: { likedUser }
    } = response.data;
    yield put(actions.unlikeUserSuccess({ likedUser }));
  } catch ({ response: { error } }) {
    yield put(actions.unlikeUserFail({ error }));
  }
}

export default function*() {
  yield all([
    takeLatest(actions.FETCH_USERS_MOST_LIKED, fetchMostLiked$),
    takeLatest(actions.LIKE_USER, likeUser$),
    takeLatest(actions.UNLIKE_USER, unlikeUser$)
  ]);
}
