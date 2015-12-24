class Api::PostsController < ApplicationController
  def index
    @posts = Post.own_posts(params[:author_id])
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

  def edit
    @post = Post.find(params[:id])
    @comment = Comment.find(params[:comment][:id])
    @comment.destroy
    render :show
  end

  def update
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
    if @comment.save!
      @post = @comment.post
      render :show
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render :show
  end

  private

  def post_params
    params.require(:post).permit(:picture_URL, :public_id, :caption)
  end

  def comment_params
    params.require(:comment).permit(:content, :post_id)
  end
end
