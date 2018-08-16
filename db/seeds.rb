# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

guest = User.create(username: "Demo", email: "demo@equalslices.com" , password: "password")
Peter = User.create(username: "Peter", email: "peter@peter.com" , password: "123456")
Homer = User.create(username: "Homer", email: "homer@simpsons.com" , password: "123456")
Marge = User.create(username: "Marge", email: "marge@simpsons.com" , password: "123456")
Bart = User.create(username: "Bart", email: "bart@simpsons.com" , password: "123456")
Lisa = User.create(username: "Lisa", email: "lisa@simpsons.com" , password: "123456")
Maggie = User.create(username: "Maggie", email: "maggie@simpsons.com" , password: "123456")
Ned = User.create(username: "Ned", email: "ned@flanders.com", password: "123456")
