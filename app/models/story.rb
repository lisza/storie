class Story < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  # Paperclip defaults:
  has_attached_file :image, default_url: ""
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments, dependent: :destroy
end
