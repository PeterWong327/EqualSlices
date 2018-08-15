import React from 'react';
import FriendIndexItem from './friend_index_item';
import FriendIndexContainer from './friend_index_container';

// deleteFriend={this.props.deleteFriend}
class FriendIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render () {
    const friends = this.props.friends.map(friend => {
      return (
        <FriendIndexItem
          className="friend-list"
          key={friend.id}
          friend={friend}
          />
      );
    });

    return (
      <div className="left-sidebar">
        <ul>
          <div className="friend-list-header">
          FRIENDS
          </div>
            {friends}
        </ul>
      </div>
    )
  }

}

export default FriendIndex;
