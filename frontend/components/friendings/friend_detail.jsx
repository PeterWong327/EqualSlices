import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import FriendDetailContainer from './friend_detail_container';

// {friend} Dashboard
class FriendDetail extends React.Component {


  componentDidMount() {
    this.props.fetchFriend(this.props.match.params.id)
  }

  render() {
    if (!this.props.friend) {
      return <div></div>
    }

    return (

        <div className="friend-balance">
          <font color="gray">YOUR BALANCE</font>
    
          <br></br>
          {this.props.friend.username} owes you $100
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
          The quick brown fox jumps over the lazy dogs.
        </div>

    )
  }
}

export default FriendDetail;
