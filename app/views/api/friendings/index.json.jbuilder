json.friendings do
  @friendings.each do |friending|
    json.set! friending.id do
      json.extract! friending, :id, :friender_id, :friendee_id
    end
  end
end

json.users do
  current_user.friendees.each do |friendee|
    json.set! friendee.id do
      json.extract! friendee, :id, :username
    end
  end

  current_user.frienders.each do |friender|
    json.set! friender.id do
      json.extract! friender, :id, :username
    end
  end
end
