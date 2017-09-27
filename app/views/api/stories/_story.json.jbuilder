json.extract! story, :id, :title, :body, :description, :created_at, :image_url

# json.author story.author, :author_id, :username, :image_url, :biography

json.set! "author" do
  json.author_id story.author_id
  json.author_name story.author.username
  json.author_image story.author.image_url
  json.author_biography story.author.biography
end

json.comments story.comments.each do |comment|
  json.partial! "api/comments/comment", comment: comment
end
