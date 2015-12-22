# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create([{username: "Robert", password: "qwerty"}, {username: "John", password: "qwerty"},
  {username: "Ned", password: "qwerty"}, {username: "Kush", password: "qwerty"},
  {username: "Marek", password: "qwerty"}, {username: "Claire", password: "qwerty"},
  {username: "Tommy", password: "qwerty"}, {username: "Jessy", password: "qwerty"},
  {username: "Sheri", password: "qwerty"}, {username: "Mac", password: "qwerty"},
  {username: "Ken", password: "qwerty"}, {username: "Hank", password: "qwerty"},
  {username: "Juraj", password: "qwerty"}, {username: "Max", password: "qwerty"}])

Post.create([{caption: "An awesome robot", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810284/Screen_Shot_2015-12-22_at_10.46.06_AM_f0qe16.png", public_id: "Screen_Shot_2015-12-22_at_10.46.06_AM_f0qe16", author_id: 1},
  {caption: "Another awesome robot!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810272/Screen_Shot_2015-12-22_at_10.48.09_AM_fwue8w.png", public_id: "creen_Shot_2015-12-22_at_10.48.09_AM_fwue8w", author_id: 1},
  {caption: "Two different robots!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810266/Screen_Shot_2015-12-22_at_10.48.23_AM_p01vvo.png", public_id: "Screen_Shot_2015-12-22_at_10.48.23_AM_p01vvo.png", author_id: 2},
  {caption: "Robot faces", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810256/Screen_Shot_2015-12-22_at_10.48.31_AM_hnbigm.png", public_id: "Screen_Shot_2015-12-22_at_10.48.31_AM_hnbigm", author_id: 3},
  {caption: "Robots with hats!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810218/Screen_Shot_2015-12-22_at_10.47.57_AM_cau7vx.png", public_id: "Screen_Shot_2015-12-22_at_10.47.57_AM_cau7vx", author_id: 4},
  {caption: "Entomology robot!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810214/Screen_Shot_2015-12-22_at_10.49.22_AM_becsyt.png", public_id: "Screen_Shot_2015-12-22_at_10.49.22_AM_becsyt", author_id: 5},
  {caption: "Warhammer -40K", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810209/Screen_Shot_2015-12-22_at_10.49.05_AM_uh3ksn.png", public_id: "Screen_Shot_2015-12-22_at_10.49.05_AM_uh3ksn", author_id: 5},
  {caption: "Furnace on the arm!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810208/Screen_Shot_2015-12-22_at_10.46.06_AM_mpuhxv.png", public_id: "Screen_Shot_2015-12-22_at_10.46.06_AM_mpuhxv", author_id: 6},
  {caption: "Long arms on this robot!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810208/Screen_Shot_2015-12-22_at_10.49.13_AM_c52p2k.png", public_id: "Screen_Shot_2015-12-22_at_10.49.13_AM_c52p2k", author_id: 7},
  {caption: "Giant robot!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450810206/Screen_Shot_2015-12-22_at_10.48.42_AM_torj5e.png", public_id: "Screen_Shot_2015-12-22_at_10.48.42_AM_torj5e", author_id: 8},
  {caption: "Sweet glove!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809889/Screen_Shot_2015-12-21_at_6.01.18_PM_rxtae5.png", public_id: "Screen_Shot_2015-12-21_at_6.01.18_PM_rxtae5", author_id: 8},
  {caption: "Awesome calculating machine", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809886/Screen_Shot_2015-12-21_at_6.00.54_PM_m6w9or.png", public_id: "Screen_Shot_2015-12-21_at_6.00.54_PM_m6w9or", author_id: 9},
  {caption: "Nice gears!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809877/Screen_Shot_2015-12-21_at_6.00.38_PM_qm47pg.png", public_id: "Screen_Shot_2015-12-21_at_6.00.38_PM_qm47pg", author_id: 9},
  {caption: "Cool scissors", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809858/Screen_Shot_2015-12-21_at_6.00.20_PM_ocdlql.png", public_id: "Screen_Shot_2015-12-21_at_6.00.20_PM_ocdlql", author_id: 10},
  {caption: "Steampunk pistol", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809830/Screen_Shot_2015-12-21_at_5.59.58_PM_v1ndzq.png", public_id: "Screen_Shot_2015-12-21_at_5.59.58_PM_v1ndzq", author_id: 11},
  {caption: "Really cool pens", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809812/Screen_Shot_2015-12-21_at_5.59.28_PM_nf11d9.png", public_id: "Screen_Shot_2015-12-21_at_5.59.28_PM_nf11d9", author_id: 12},
  {caption: "Neat USB case", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809802/Screen_Shot_2015-12-21_at_5.59.15_PM_y6mnzq.png", public_id: "Screen_Shot_2015-12-21_at_5.59.15_PM_y6mnzq", author_id: 12},
  {caption: "Steampunk Tardis!", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809795/Screen_Shot_2015-12-21_at_5.58.55_PM_o0u4oz.png", public_id: "Screen_Shot_2015-12-21_at_5.58.55_PM_o0u4oz", author_id: 13},
  {caption: "Full clothing", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450809780/Screen_Shot_2015-12-21_at_5.58.41_PM_lb0kmo.png", public_id: "Screen_Shot_2015-12-21_at_5.58.41_PM_lb0kmo", author_id: 13},
  {caption: "steampunk guitar", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450749944/fjkftzk0od8jrvgd9qbb.png", public_id: "fjkftzk0od8jrvgd9qbb", author_id: 14},
  {caption: "it's a navigation box", picture_URL: "https://res.cloudinary.com/dbmqufwhv/image/upload/v1450749850/bq8zujdubfndm6gzdh13.png", public_id: "bq8zujdubfndm6gzdh13", author_id: 14}])

14.times do |i|
  14.times do |j|
    Follow.create(follower_id: "#{i}", followed_id: "#{j}")
  end
end
