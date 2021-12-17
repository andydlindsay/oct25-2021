dogs = ['Rex', 'Bidu', 'Ryder', 'Chica', 'Toaster', 'Dioji']

# dogs.each do |name|
#   puts "who's a good dog? #{name} is"
# end

# block - from do to end
# proc - block in memory
# lambda - a special proc that cares about arguments

# my_block = Proc.new {
#   puts "who's a good dog?  is (from inside the lambda)"
# }
my_block = Proc.new do
  puts "who's a good dog?  is (from inside the lambda)"
end

dogs.each &my_block

10.times &my_block
