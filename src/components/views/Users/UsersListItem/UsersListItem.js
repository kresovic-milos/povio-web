import React, { PureComponent } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import Badge from '@material-ui/core/Badge';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import IconButton from '@material-ui/core/IconButton';

class UsersListItem extends PureComponent {
  toggleLike(userId, isLiked) {
    const { likeUser, unlikeUser } = this.props;
    if (isLiked) {
      unlikeUser(userId);
    } else {
      likeUser(userId);
    }
  }

  render() {
    const { id, username, likedByCount, isLiked, isLoggedIn } = this.props;

    const isLikedBy = isLiked ? parseInt(isLiked, 10) > 0 : false;

    return (
      <ListItem button>
        <ListItemAvatar>
          <Badge
            badgeContent={likedByCount}
            color="error"
            invisible={parseInt(likedByCount, 10) === 0}
          >
            <Avatar>
              <PersonIcon />
            </Avatar>
          </Badge>
        </ListItemAvatar>
        <ListItemText primary={username} />
        <ListItemSecondaryAction>
          {isLoggedIn && (
            <IconButton onClick={() => this.toggleLike(id, isLikedBy)}>
              {isLikedBy ? <ThumbDownIcon /> : <ThumbUpIcon />}
            </IconButton>
          )}
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default UsersListItem;
