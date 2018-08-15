json.users do
  json.set! @friending.friendee.id do
    json.extract! @friending.friendee, :id, :username, :email
  end
end

json.friending do
  json.set! @friending.id do
    json.extract! @friending, :friender_id, :friendee_id
  end
end
