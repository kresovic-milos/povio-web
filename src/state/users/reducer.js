import { handleActions } from 'redux-actions';
import * as actions from './actions';
import initialState from './initialState';

export default handleActions(
  new Map([
    [
      actions.fetchMostLiked,
      state => ({
        ...state,
        inProgress: true
      })
    ],
    [
      actions.fetchMostLikedFail,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        error: payload && payload.error ? payload.error : { message: 'unknown error' }
      })
    ],
    [
      actions.fetchMostLikedSuccess,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: false,
        error: null,
        mostLiked: payload
      })
    ],
    [
      actions.likeUserFail,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        error: payload && payload.error ? payload.error : { message: 'unknown error' }
      })
    ],
    [
      actions.likeUserSuccess,
      (state, { payload: { likedUser } }) => ({
        ...state,
        inProgress: false,
        fail: false,
        error: null,
        mostLiked: {
          ...state.mostLiked,
          [`_${likedUser.id}`]: likedUser
        }
      })
    ],
    [
      actions.unlikeUserFail,
      (state, { payload }) => ({
        ...state,
        inProgress: false,
        fail: true,
        error: payload && payload.error ? payload.error : { message: 'unknown error' }
      })
    ],
    [
      actions.unlikeUserSuccess,
      (state, { payload: { likedUser } }) => ({
        ...state,
        inProgress: false,
        fail: false,
        error: null,
        mostLiked: {
          ...state.mostLiked,
          [`_${likedUser.id}`]: likedUser
        }
      })
    ]
  ]),
  { ...initialState }
);
