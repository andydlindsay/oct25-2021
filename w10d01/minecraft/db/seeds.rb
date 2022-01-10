# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Running seeds"

puts "Creating Mobs..."
25.times do
  Mob.create(
    name: Faker::Games::Minecraft.mob
  )
end

# grab the newly created mobs
mobs = Mob.all

puts "Creating Drops..."
100.times do
  Drop.create(
    item: Faker::Games::Minecraft.item,
    enchantment: Faker::Games::Minecraft.enchantment,
    biome: Faker::Games::Minecraft.biome,
    mob: mobs.sample
  )
end

puts "All done!"
