class Transaction < ApplicationRecord
  validates :balance_to_pay, presence: true
  validates :balance_to_pay, numericality: true

  belongs_to :bill,
    primary_key: :id,
    foreign_key: :bill_id,
    class_name: :Bill

  # belongs_to :bill_recipient,
  belongs_to :user,
    primary_key: :id,
    foreign_key: :bill_recipient_id,
    class_name: :User

end
