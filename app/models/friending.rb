class Friending < ApplicationRecord
  validates :friender_id, :friendee_id, presence: true
  validates :friender_id, uniqueness: { scope: :friendee_id }

belongs_to :friender,
  # belongs_to :user,
    primary_key: :id,
    foreign_key: :friender_id,
    class_name: :User

belongs_to :friendee,
  # belongs_to :user,
    primary_key: :id,
    foreign_key: :friendee_id,
    class_name: :User
end
