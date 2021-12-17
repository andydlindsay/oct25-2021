# collection of key/value pairs
# object, hash, dictionary, associative arrays

user = {
  "username" => "jstamos",
  "password" => "1234"
}

# puts user
# puts user["username"]

user = {
  :username => 'jstamos',
  :password => '1234'
}

# my_key = "password"
# puts user
# p user[my_key.to_sym]

user = {
  username: 'jstamos',
  password: '1234'
}

puts user
puts user[:username]
