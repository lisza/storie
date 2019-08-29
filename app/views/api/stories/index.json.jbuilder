@stories.each do |story|
  json.set! story do
    json.partial! "api/stories/story", story: story
  end
end
