import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container';

// {friend} Dashboard
class FriendDetail extends React.Component {


  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.friendId)
  }

  render() {
    return (
      <div className="friend-detail-name">
        s Dashboard
      </div>
    )
  }
}

export default FriendDetail;
