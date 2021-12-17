num = 6

if num > 8
  puts "this number is greater than 8"
elsif (num > 5)
  puts "this number is between 5 and 8"
else
  puts "it is not greater than 8"
end

username = 'alice'

# if (username != "jstamos") 
#   puts "choose a better username"
# end

puts "choose a better username" if (username != 'jstamos') 

sunny = false
puts "take an umbrella" unless sunny

# unless (username == 'jstamos')
#   puts "choose a better username"
# end

# if (condition) {}
# if (err) throw err;

name = username == 'jstamos' ? 'John' : 'Something else'
puts name
