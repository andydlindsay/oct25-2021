# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Creating the seeds"

puts "Creating actors"
10.times do
  Actor.create(
    name: Faker::TvShows::TheFreshPrinceOfBelAir.actor
  )
end

actors = Actor.all

puts "Creating quotes"
100.times do
  Quote.create(
    character: Faker::TvShows::TheFreshPrinceOfBelAir.character,
    quote: Faker::TvShows::TheFreshPrinceOfBelAir.quote,
    actor: actors.sample
  )
end

puts "All done!"
