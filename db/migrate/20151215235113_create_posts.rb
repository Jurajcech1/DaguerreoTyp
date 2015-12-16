class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :caption
      t.string :picture_URL, null: false
      t.integer :public_id
      t.integer :author_id, null: false

      t.timestamps null: false
    end
  end
end
