import React from 'react';
import FriendIndexItem from './friend_index_item';
import FriendIndexContainer from './friend_index_container';

class FriendIndex extends React.Component {

  componentDidMount() {
    this.props.fetchFriends();
  }

  render () {
    const friends = this.props.friends.map(friend => {
      return (
        <FriendIndexItem
          key={friend.id}
          friend={friend}
          deleteFriend={this.props.deleteFriend}
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
