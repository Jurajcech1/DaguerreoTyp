class ChangePostsPublicIdToString < ActiveRecord::Migration
  def change
    change_column :posts, :public_id, :string
  end
end
