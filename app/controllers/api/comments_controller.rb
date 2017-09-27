class Api::CommentsController < ApplicationController
  before_action :require_login, only: [:create, :destroy]

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    @comment.story_id = params[:story_id]

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.author_id == current_user.id
      @comment.destroy
      render :show
    else
      render json: ["Comment author and logged in user don't match"], status: 422
    end
  end

  def index
    # returns comments for a specific story
    if params[:story_id]
      @comments = Comment.where(story_id: params[:story_id])
    else
      # returns all comments
      @comments = Comment.all
    end
  end

  def show
    @comment = Comment.find(params[:id])
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
