class Comment < ApplicationRecord
  validates :body, :author_id, :story_id, presence: true;

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :story

end
