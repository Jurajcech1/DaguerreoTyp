class Post < ActiveRecord::Base
  validates :author_id, :picture_URL, presence: true

  
end
