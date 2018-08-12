json.array! @friendings do |friending|
  json.extract! friending, :friendee_id
end
