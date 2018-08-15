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

export const createFriend = (email) => {
  return $.ajax({
    method: "POST",
    url: `/api/friendings`,
    data: { search: { email } },
  });
};

export const deleteFriend = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/friendings/${id}`
  });
};
