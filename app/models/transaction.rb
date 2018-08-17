class Transaction < ApplicationRecord
  validates :amount_paid, presence: true
  validates :amount_paid, numericality: true

  belongs_to :bill,
    primary_key: :id,
    foreign_key: :bill_id,
    class_name: :Bill

  belongs_to :bill_recipient,
  # belongs_to :user,
    primary_key: :id,
    foreign_key: :trans_initiator_id,
    class_name: :User
    
  # belongs_to :user,
  belongs_to :bill_sender,
    primary_key: :id,
    foreign_key: :trans_recipient_id,
    class_name: :User

end
