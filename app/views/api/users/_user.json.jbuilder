json.extract! user, :id, :username, :email, :biography, :image_url

json.followers user.followers, :id, :username, :image_url
json.following user.following, :id, :username, :image_url

if current_user
  json.followed_by_current_user current_user.following?(user)
end
