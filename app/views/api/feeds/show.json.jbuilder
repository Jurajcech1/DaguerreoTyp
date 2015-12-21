json.extract! @post, :id, :caption, :picture_URL, :public_id, :author_id, :created_at, :updated_at
json.age time_ago_in_words(@post.created_at)
