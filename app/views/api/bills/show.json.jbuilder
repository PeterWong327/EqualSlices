json.bills do
  json.set! @bill.id do
    json.extract! @bill, :id, :biller_id, :description, :balance, :date
  end
end
