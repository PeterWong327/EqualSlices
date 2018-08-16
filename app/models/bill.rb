class Bill < ApplicationRecord
  validates :description, :balance, presence: true
  validates :balance, numericality: true
end

belongs_to :user,
  primary_key: :id,
  foreign_key: :biller_id,
  class_name: :User
