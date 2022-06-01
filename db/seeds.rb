# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

email_address = %w(1@1.com 2@2.com 3@3.com 4@4.com 5@5.com)
username = %w(daan klaas henk piet sjaak)
User.destroy_all
Address.destroy_all

n = 0
5.times do
  user = User.create(
    user_name: username.sample,
    email: email_address[n],
    password: "12345678"
  )
  puts user.email
  address = Address.new(
    name: "home#{n}",
    address: " rudi geluksstrasse 27",
    kind_of_place: "apartment",
    place_in_building: " achterhuis",
    floor: rand(1..10),
    elevator: false,
    description: "it is a super nice long path"
  )
  address.user = user
  address.save!
  puts address.name
  n += 1
end
