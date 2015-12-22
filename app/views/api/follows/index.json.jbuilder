json.array! @followed do |followee|
  json.extract! followee, :id, :username, :created_at, :updated_at
  json.most_recent_photo followee.find_latest
end
