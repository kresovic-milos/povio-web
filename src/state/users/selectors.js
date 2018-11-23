export const getUsersState = ({ users }) => users;
export const getUserState = ({ users: { mostLiked } }, userId) => {
  return mostLiked[`_${userId}`];
};
