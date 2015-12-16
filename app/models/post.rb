class Post < ActiveRecord::Base
  validates :author_id, :picture_URL, presence: true

  def index
  end

  def show
  end

  def create
  end

  def destroy
  end
end
