import { connect } from 'react-redux';
import { compose } from 'recompose';
import { fetchMostLiked, likeUser, unlikeUser } from '../../../state/users/actions';
import { getUsersState } from '../../../state/users/selectors';
import { getAppBarState } from '../../../state/appBar/selectors';
import UsersList from './UsersList';

const actions = {
  fetchMostLiked,
  likeUser,
  unlikeUser
};

const mapStateToProps = state => {
  const { isLoggedIn } = getAppBarState(state);
  return { ...getUsersState(state), isLoggedIn };
};

export default compose(
  connect(
    mapStateToProps,
    actions
  )
)(UsersList);
