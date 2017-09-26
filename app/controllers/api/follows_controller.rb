class Api::FollowsController < ApplicationController

  def create
    puts params
    @user = User.find(params[:id])
    current_user.follow(@user)
    render "api/users/show"
  end

  def destroy
    @user = User.find(params[:id])
    current_user.unfollow(@user)
    render "api/users/show"
  end

end
