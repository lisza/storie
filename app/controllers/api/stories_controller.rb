class Api::StoriesController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id

    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def index
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
  end

  # The might be a better way to check if story belongs to current_user...
  # Do we need to check at all, or is this handled by frontend protected routes?
  def update
    @story = Story.find(params[:id])

    if @story.author_id == current_user.id
      if @story.update_attributes(story_params)
        render :show
      else
        render json: @story.errors.full_messages, status: 422
      end
    else
      render json: ["Current User isn't allowed to update this story"], status: 422
    end
  end

  def destroy
    @story = Story.find(params[:id])
    @story.destroy
    render :show
  end

  private

  def story_params
    params.require(:story).permit(:title, :body, :description, :image_url)
  end
end
