# Schema Information

## posts
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
caption     | string    | not null
picture_URL | string    | not null
public_id   | integer   | not null
author_id   | integer   | not null, foreign key (references users), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
content     | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed
post_id     | integer   | not null, foreign key (references posts), indexed


## follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followed_id | integer   | not null, foreign key (references users), indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
