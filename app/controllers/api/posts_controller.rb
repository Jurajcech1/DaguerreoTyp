class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def show
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
    params.require(:post).permit(:image_URL, :public_id)
  end
end
