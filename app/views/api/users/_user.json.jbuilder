json.extract! user, :id, :username, :email, :biography, :image_url, :authored_stories, :followers, :following

json.followed_by_current_user current_user.following?(user)
