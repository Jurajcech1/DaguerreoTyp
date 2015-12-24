class Post < ActiveRecord::Base
  validates :author_id, :picture_URL, presence: true

  has_many :comments,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: "Comment"


  def self.own_posts(id)
    self.where("author_id = ?", id)
  end


end
