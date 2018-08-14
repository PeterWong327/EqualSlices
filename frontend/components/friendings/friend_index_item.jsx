import React from 'react';
import { Link } from 'react-router-dom';

const FriendIndexItem = ({ friend, deleteFriend}) => {
  return (
    <li>
      <Link to={`/friendings/${friending.id}`}>
        {friending.friendee_id}
      </Link>&nbsp;
      <button onClick={() => deleteFriend(friending.id)}>Delete friend</button>
    </li>);
};

export default FriendIndexItem;
