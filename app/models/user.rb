require 'faker'

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  before_save :set_default_image

  attr_reader :password

  # Associations here once I have my other db tables
  has_many :authored_stories,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Story

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.valid_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def set_default_image
    unless self.image_url
      color = Faker::Color.hex_color[1..-1]
      self.image_url = "http://www.tinygraphs.com/spaceinvaders/#{self.username}?&colors=fff&colors=#{color}"
    end
  end
end
