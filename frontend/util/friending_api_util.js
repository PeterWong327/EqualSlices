export const fetchFriends = () => {
  return $.ajax({
    method: "GET",
    url: '/api/friendings'
  });
};

export const fetchFriend = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/friendings/${id}`
  });
};

//need to use additional information to get both friender_id AND friendee_id?
export const createFriend = (friend) => {
  return $.ajax({
    method: "POST",
    url: `/api/friendings`,
    data: { friend },
  });
};

export const deleteFriend = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/friendings/${id}`
  });
};
