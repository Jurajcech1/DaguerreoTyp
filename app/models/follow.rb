class Follow < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true

  belongs_to :follower,
  primary_key: :id,
  foreign_key: :follower_id,
  class_name: "User"

  belongs_to :followee,
  primary_key: :id,
  foreign_key: :followed_id,
  class_name: "User"
end
