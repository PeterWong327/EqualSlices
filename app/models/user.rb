class User < ApplicationRecord
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6}, allow_nil: true

#FRIENDS
has_many :friend_sends,
  # has_many :friendings,
    primary_key: :id,
    foreign_key: :friender_id,
    class_name: :Friending

has_many :friend_receives,
  # has_many :friendings,
    primary_key: :id,
    foreign_key: :friendee_id,
    class_name: :Friending

# shows all friends of user
  has_many :frienders,
    through: :friend_receives,
    source: :friender

  has_many :friendees,
    through: :friend_sends,
    source: :friendee

#BILLS
  has_many :bills_sent,
    primary_key: :id,
    foreign_key: :biller_id,
    class_name: :Bill

  has_many :bills_received,
    primary_key: :id,
    foreign_key: :bill_recipient_id,
    class_name: :Bill

#TRANSACTIONS
  has_many :transactions_initiated,
    primary_key: :id,
    foreign_key: :trans_initiator_id,
    class_name: :User

  has_many :transactions_received,
    primary_key: :id,
    foreign_key: :trans_recipient_id,
    class_name: :User

  # has_many :bill_recipients,
  #   through: :transactions,
  #   source: :user

  after_initialize :ensure_session_token

  attr_reader :password

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

end
