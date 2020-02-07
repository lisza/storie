# == Schema Information
#
# Table name: follows
#
#  id          :integer          not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Follow < ApplicationRecord
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }
  validate :restrict_self_follows

  belongs_to :follower,
    primary_key: :id,
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followed,
    primary_key: :id,
    foreign_key: :followed_id,
    class_name: :User

  def restrict_self_follows
    if self.follower_id === self.followed_id
      errors.add(:followed_id, "You cannot follow yourself")
    end
  end

end
