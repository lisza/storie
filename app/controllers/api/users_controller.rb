class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.image_url = ""
      @user.image_url = "assets/user_image.png"
    end

    if @user.save
      login(@user)
      render "/api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = Usr.find(params[:id])
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :biography, :image_url, :email)
  end
end