class Api::FollowsController < ApplicationController
  def index
    @followed = current_user.followees
    render :index
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save!
      @user = @follow.followee
      render :show
    end
  end

  def destroy
    @follow = Follow.find_by(followed_id: params[:id], follower_id: current_user.id)
    @user = @follow.followee
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:followed_id)
  end
end
