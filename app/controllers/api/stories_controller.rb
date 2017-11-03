class Api::StoriesController < ApplicationController
  before_action :require_login, only: [:create, :update, :destroy]

  def create
    @story = Story.new(story_params)
    @story.author_id = current_user.id

    if @story.save
      render :show
    else
      puts @story.errors.full_messages
      render json: @story.errors.full_messages, status: 422
    end
  end

  def index
    # TO FETCH ALL AUTHORED STORIES
    if params[:author_id]
      @stories = Story.where(author_id: params[:author_id])
    else
      # FETCH ALL STORIES
      @stories = Story.all
    end
  end


  def show
    @story = Story.find(params[:id])
  end

  def update
    @story = Story.find(story_params[:id])

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
    params.require(:story).permit(:title, :body, :description, :image, :id)
  end
end
