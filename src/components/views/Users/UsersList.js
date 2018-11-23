import React, { PureComponent } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import List from '@material-ui/core/List';
import UsersListItem from './UsersListItem';

class UsersList extends PureComponent {
  componentDidMount() {
    const { fetchMostLiked } = this.props;
    fetchMostLiked();
  }

  render() {
    const { inProgress, error, fail, mostLiked, isLoggedIn } = this.props;

    if (inProgress) return <CircularProgress />;

    if (fail) return <div>{error.message}</div>;

    return (
      <List>
        {Object.values(mostLiked).map(user => (
          <UsersListItem key={user.id} userId={user.id} isLoggedIn={isLoggedIn} />
        ))}
      </List>
    );
  }
}

export default UsersList;
