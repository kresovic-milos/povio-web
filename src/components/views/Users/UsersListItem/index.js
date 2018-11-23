import { connect } from 'react-redux';
import { compose } from 'recompose';
import { likeUser, unlikeUser } from '../../../../state/users/actions';
import { getUserState } from '../../../../state/users/selectors';
import UsersListItem from './UsersListItem';

const actions = {
  likeUser,
  unlikeUser
};

const mapStateToProps = (state, { userId }) => {
  const user = getUserState(state, userId);

  return { ...user };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(UsersListItem);
