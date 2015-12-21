class Post < ActiveRecord::Base
  validates :author_id, :picture_URL, presence: true

  def self.own_posts(id)
    self.where("author_id = ?", id)
  end


end
