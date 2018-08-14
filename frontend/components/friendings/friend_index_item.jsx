import React from 'react';
import { Link } from 'react-router-dom';

const FriendIndexItem = ({ friend, deleteFriend}) => {
  return (
    <li>
      <Link to={`/friendings/${friend.id}`}>
        { friend.username }
      </Link>&nbsp;
      <button onClick={() => deleteFriend(friend.id)}>Delete friend</button>

    </li>);
};

export default FriendIndexItem;
