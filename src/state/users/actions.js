import { createAction } from 'redux-actions';

// fetch most liked
export const FETCH_USERS_MOST_LIKED = '[USERS] Fetch most liked';
export const fetchMostLiked = createAction(FETCH_USERS_MOST_LIKED);

export const FETCH_USERS_MOST_LIKED_FAIL = `${FETCH_USERS_MOST_LIKED} fail`;
export const fetchMostLikedFail = createAction(FETCH_USERS_MOST_LIKED_FAIL);

export const FETCH_USERS_MOST_LIKED_SUCCESS = `${FETCH_USERS_MOST_LIKED} success`;
export const fetchMostLikedSuccess = createAction(FETCH_USERS_MOST_LIKED_SUCCESS);

// like
export const LIKE_USER = '[USERS] like';
export const likeUser = createAction(LIKE_USER);

export const LIKE_USER_FAIL = `${LIKE_USER} fail`;
export const likeUserFail = createAction(LIKE_USER_FAIL);

export const LIKE_USER_SUCCESS = `${LIKE_USER} success`;
export const likeUserSuccess = createAction(LIKE_USER_SUCCESS);

// unlike
export const UNLIKE_USER = '[USERS] unlike';
export const unlikeUser = createAction(UNLIKE_USER);

export const UNLIKE_USER_FAIL = `${UNLIKE_USER} fail`;
export const unlikeUserFail = createAction(UNLIKE_USER_FAIL);

export const UNLIKE_USER_SUCCESS = `${UNLIKE_USER} success`;
export const unlikeUserSuccess = createAction(UNLIKE_USER_SUCCESS);
