class Story < ApplicationRecord
  validates :title, :body, :author_id, presence: true
  # Paperclip defaults:
  has_attached_file :image, default_url: "default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  # before_save :set_default_image

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  has_many :comments, dependent: :destroy

  # def set_default_image
  #   self.image_url ||= "http://68.media.tumblr.com/47f1bb26b315fa4c053d4ce12c6a9233/tumblr_mq56lpv7oh1r6w3qso1_500.jpg"
  # end
end
