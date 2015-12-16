class AddIndexToPosts < ActiveRecord::Migration
  def change
    add_index :posts, :author_id
    add_index :posts, :picture_URL 
  end
end
