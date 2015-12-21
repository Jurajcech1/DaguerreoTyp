class RemoveIndexFromFollows < ActiveRecord::Migration
  def change
    remove_index :follows, :follower_id
    remove_index :follows, :followed_id
  end
end
