json.bills do
  @bills.each do |bill|
    json.set! bill.id do
      json.extract! bill, :id, :date, :description, :balance
    end
  end
end
