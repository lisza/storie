# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string
#  password_digest :string           not null
#  session_token   :string           not null
#  biography       :text
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

# require 'faker'

class User < ApplicationRecord
  validates :username, :session_token, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token
  before_save :set_default_image

  has_many :authored_stories,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Story

  has_many :authored_comments,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Comment

  has_many :active_follows,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :Follow

  has_many :following,
    through: :active_follows,
    source: :followed

  has_many :passive_follows,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: :Follow

  has_many :followers,
    through: :passive_follows,
    source: :follower

  attr_reader :password

  def follow(other_user)
    self.active_follows.create(followed_id: other_user.id)
  end

  def unfollow(other_user)
      self.active_follows.find_by(followed_id: other_user.id).destroy
  end

  def following?(other_user)
    self.following.include?(other_user)
  end

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
      self.image_url = "https://www.tinygraphs.com/spaceinvaders/#{self.username}?&colors=fff&colors=#{color}"
    end
  end
end
