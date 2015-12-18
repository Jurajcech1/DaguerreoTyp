class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save!
      render :show
    end
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:picture_URL, :public_id, :caption)
  end
end
