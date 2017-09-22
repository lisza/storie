json.extract! story, :id, :title, :body, :description, :created_at
json.image_url story.image_url

json.set! "author" do
  json.author_id story.author_id
  json.author_name story.author.username
  json.author_image story.author.image_url
  json.author_biography story.author.biography
end
