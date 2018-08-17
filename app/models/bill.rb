class Bill < ApplicationRecord
  validates :description, :balance, :date, presence: true
  validates :balance, numericality: true

  belongs_to :biller,
    primary_key: :id,
    foreign_key: :biller_id,
    class_name: :User

  belongs_to :bill_recipient,
    primary_key: :id,
    foreign_key: :bill_recipient_id,
    class_name: :User

  has_many :transactions,
    primary_key: :id,
    foreign_key: :bill_id,
    class_name: :Transaction

  # has_one :bill_recipient,
  #   through: :transactions,
  #   source: :bill_recipient
  #
  # has_one :bill_sender,
  #   through: :transactions,
  #   source: :bill_sender


  # def self.make_bill(bill_params, recipient_id)
  #   biller_id = current_user.id
  #   bill = Bill.new(bill_params)
  #   bill = bill.save!
  #   transaction = Transaction.new()
  #   transaction.balance_to_pay = (bill.balance / 2)
  #   transaction.bill_id = bill.id
  #   transaction.bill_recipient_id = recipient_id
  #   transaction.save!
  #   return bill
  # end

  # def bill_params
  #   params.require(:bill).permit(:biller_id, :description, :balance, :date)
  # end
end
