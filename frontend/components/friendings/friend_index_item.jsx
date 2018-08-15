import React from 'react';
import { Link } from 'react-router-dom';

// <button onClick={() => deleteFriend(friend.id)}>Delete friend</button>

const FriendIndexItem = ({ friend, deleteFriend}) => {
  return (
    <li>
      <Link className="friend-list" to={`/friendings/${friend.id}`}>
        { friend.username }
      </Link>&nbsp;

    </li>);
};

export default FriendIndexItem;
