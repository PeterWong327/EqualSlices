class Bill < ApplicationRecord
  validates :description, :balance, :date, presence: true
  validates :balance, numericality: true

# belongs_to :biller,
  belongs_to :user,
    primary_key: :id,
    foreign_key: :biller_id,
    class_name: :User

  has_many :transactions,
    primary_key: :id,
    foreign_key: :bill_id,
    class_name: :Bill

  has_many :bill_recipients,
    through: :transactions,
    source: :user

  def self.make_bill(bill_params, recipient_id)
    biller_id = current_user.id
    bill = Bill.new(bill_params)
    transaction = Transaction.new()
    transaction.balance_to_pay = (bill.balance / 2)
    transaction.bill_id = bill.id
    transaction.bill_recipient_id = recipient_id
    return bill
  end

  def bill_params
    params.require(:bill).permit(:biller_id, :description, :balance, :date)
  end
end
