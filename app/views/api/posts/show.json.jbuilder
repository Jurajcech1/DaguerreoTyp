json.extract! @post, :id, :caption, :picture_URL, :public_id, :author_id, :created_at, :updated_at
json.age time_ago_in_words(@post.created_at)
json.comments @post.comments do |comment|
  json.extract! comment, :id, :content, :author_id, :post_id
  json.author comment.author
end
