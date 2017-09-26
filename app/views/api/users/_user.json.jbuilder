json.extract! user, :id, :username, :email, :biography, :image_url, :authored_stories, :followers, :following

if current_user
  json.followed_by_current_user current_user.following?(user)
end
