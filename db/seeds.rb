# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Story.destroy_all

ActiveRecord::Base.transaction do

  user1 = User.create!(
    username: "guest",
    password: "password",
    image_url: "https://www.tinygraphs.com/spaceinvaders/guest?&colors=fff&colors=000"
    )

  5.times do
    username = Faker::TwinPeaks.character
    color1 = "ffffff"
    color2 = Faker::Color.hex_color[1..-1]

    options = {
      username: username,
      password: 'password',
      biography: Faker::TwinPeaks.quote,
      image_url: "https://www.tinygraphs.com/spaceinvaders/#{username}?&colors=#{color1}&colors=#{color2}"
    }
    User.create!(options)
  end

  10.times do
    options = {
      author_id: User.all.map(&:id).sample,
      title: Faker::Book.title,
      body: Faker::Lorem.paragraphs,
    }
    Story.create!(options)
  end

end
