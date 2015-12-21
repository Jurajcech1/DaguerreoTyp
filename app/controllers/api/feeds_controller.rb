class Api::FeedsController < ApplicationController

  def show
    @post = User.find_latest(params[:id])
    if @post
      render :show
    else
      render "no posts".json
    end
  end
end
