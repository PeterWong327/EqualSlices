json.bills do
  @bills.each do |bill|
    json.set! bill.id do
      json.extract! bill, :id, :biller_id, :bill_recipient_id, :date, :description, :balance
    end
  end
end

json.users do
  @users.each do |user|
    json.set! user.id do
      json.extract! user, :username
    end
  end
end
