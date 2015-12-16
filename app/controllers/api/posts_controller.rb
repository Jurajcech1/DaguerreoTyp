class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render :index
  end

  def show
  end

  def create
  end

  def destroy
  end
end
