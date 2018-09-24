# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

guest = User.create(username: "Demo", email: "demo@equalslices.com" , password: "password")

Homer = User.create(username: "Homer", email: "chunkylover53@aol.com" , password: "donuts")
Marge = User.create(username: "Marge", email: "marge@simpsons.com" , password: "123456")
Bart = User.create(username: "Bart", email: "bart@simpsons.com" , password: "123456")
Lisa = User.create(username: "Lisa", email: "lisa@simpsons.com" , password: "123456")
Maggie = User.create(username: "Maggie", email: "maggie@simpsons.com" , password: "123456")
Ned = User.create(username: "Ned", email: "ned@flanders.com", password: "123456")
Edna = User.create(username: "Mrs. Krabappel", email: "edna@krabappel.com", password: "123456")
Krusty = User.create(username: "Krusty the Clown", email: "krusty@simpsons.com", password: "123456")
Grampa = User.create(username: "Grampa", email: "abe@simpsons.com", password: "123456")
Seymour = User.create(username: "Principal Skinner", email: "seymour@skinner.com", password: "123456")
Agnes = User.create(username: "Agnes", email: "agnes@skinner.com", password: "123456")
Montgomery = User.create(username: "Mr. Burns", email: "montgomery@burns.com", password: "123456")
Waylon = User.create(username: "Smithers", email: "waylon@smithers.com", password: "123456")
Moe = User.create(username: "Moe", email: "moe@szyslak.com", password: "123456")
Patty = User.create(username: "Patty", email: "patty@bouvier.com", password: "123456")
Selma = User.create(username: "Selma", email: "selma@bouvier.com", password: "123456")
Barney = User.create(username: "Barney", email: "barney@gumble.com", password: "123456")
Milhouse = User.create(username: "Milhouse", email: "milhouse@vanhouten.com", password: "123456")
Lenny = User.create(username: "Lenny", email: "lenny@leonard.com", password: "123456")
Carl = User.create(username: "Carl", email: "carl@carlson.com", password: "123456")
Ralph = User.create(username: "Ralph", email: "ralph@wiggum.com", password: "123456")

Friending.destroy_all

Friending.create(friender_id: guest.id, friendee_id: Homer.id)
Friending.create(friender_id: guest.id, friendee_id: Marge.id)
Friending.create(friender_id: guest.id, friendee_id: Bart.id)
Friending.create(friender_id: guest.id, friendee_id: Lisa.id)
Friending.create(friender_id: guest.id, friendee_id: Maggie.id)
Friending.create(friender_id: guest.id, friendee_id: Grampa.id)

Friending.create(friender_id: Ned.id, friendee_id: Edna.id)
Friending.create(friender_id: Seymour.id, friendee_id: Edna.id)
Friending.create(friender_id: Marge.id, friendee_id: Edna.id)
Friending.create(friender_id: Patty.id, friendee_id: Edna.id)
Friending.create(friender_id: Selma.id, friendee_id: Edna.id)

Friending.create(friender_id: Bart.id, friendee_id: Milhouse.id)
Friending.create(friender_id: Bart.id, friendee_id: Lisa.id)
Friending.create(friender_id: Bart.id, friendee_id: Maggie.id)
Friending.create(friender_id: Bart.id, friendee_id: Homer.id)
Friending.create(friender_id: Bart.id, friendee_id: Marge.id)

Friending.create(friender_id: Homer.id, friendee_id: Marge.id)
Friending.create(friender_id: Homer.id, friendee_id: Moe.id)
Friending.create(friender_id: Homer.id, friendee_id: Barney.id)
Friending.create(friender_id: Homer.id, friendee_id: Carl.id)
Friending.create(friender_id: Homer.id, friendee_id: Lenny.id)
Friending.create(friender_id: Homer.id, friendee_id: Montgomery.id)

Friending.create(friender_id: Ned.id, friendee_id: Homer.id)
Friending.create(friender_id: Ned.id, friendee_id: Seymour.id)
Friending.create(friender_id: Ned.id, friendee_id: Waylon.id)
Friending.create(friender_id: Ned.id, friendee_id: Krusty.id)

Friending.create(friender_id: Lisa.id, friendee_id: Homer.id)
Friending.create(friender_id: Lisa.id, friendee_id: Maggie.id)
Friending.create(friender_id: Lisa.id, friendee_id: Marge.id)
Friending.create(friender_id: Lisa.id, friendee_id: Milhouse.id)
Friending.create(friender_id: Lisa.id, friendee_id: Ralph.id)

Friending.create(friender_id: Marge.id, friendee_id: Patty.id)
Friending.create(friender_id: Marge.id, friendee_id: Selma.id)
Friending.create(friender_id: Marge.id, friendee_id: Ned.id)
Friending.create(friender_id: Marge.id, friendee_id: Agnes.id)


Bill.destroy_all

Bill.create(biller_id: guest.id, bill_recipient_id: Homer.id, description: "breakfast", balance: "15", date: "2018-09-24")
Bill.create(biller_id: guest.id, bill_recipient_id: Marge.id, description: "babysitting", balance: "100", date: "2018-09-24")
Bill.create(biller_id: guest.id, bill_recipient_id: Bart.id, description: "toys", balance: "16", date: "2018-09-24")
Bill.create(biller_id: guest.id, bill_recipient_id: Lisa.id, description: "books", balance: "23", date: "2018-09-24")
Bill.create(biller_id: guest.id, bill_recipient_id: Maggie.id, description: "snack", balance: "5", date: "2018-09-24")
Bill.create(biller_id: guest.id, bill_recipient_id: Grampa.id, description: "bingo", balance: "10", date: "2018-09-24")

Bill.create(biller_id: Homer.id, bill_recipient_id: guest.id, description: "me so hungy", balance: "5", date: "2018-09-23")
Bill.create(biller_id: Homer.id, bill_recipient_id: guest.id, description: "beer at Moe's", balance: "10", date: "2018-09-22")
Bill.create(biller_id: Homer.id, bill_recipient_id: guest.id, description: "donuts", balance: "3", date: "2018-09-21")
Bill.create(biller_id: Homer.id, bill_recipient_id: guest.id, description: "movies", balance: "13", date: "2018-09-20")
Bill.create(biller_id: Homer.id, bill_recipient_id: guest.id, description: "Krusty Burger", balance: "8", date: "2018-09-19")

Bill.create(biller_id: Marge.id, bill_recipient_id: guest.id, description: "pizza", balance: "7", date: "2018-09-18")
Bill.create(biller_id: Marge.id, bill_recipient_id: guest.id, description: "lunch", balance: "20", date: "2018-09-10")
Bill.create(biller_id: Marge.id, bill_recipient_id: guest.id, description: "homemade cookies", balance: "51", date: "2018-09-03")
Bill.create(biller_id: Marge.id, bill_recipient_id: Homer.id, description: "date night", balance: "30", date: "2018-09-02")
Bill.create(biller_id: Marge.id, bill_recipient_id: Patty.id, description: "drinks", balance: "5", date: "2018-09-01")
Bill.create(biller_id: Marge.id, bill_recipient_id: Selma.id, description: "drinks", balance: "5", date: "2018-09-01")

Bill.create(biller_id: Bart.id, bill_recipient_id: guest.id, description: "homemade cookies", balance: "51", date: "2018-09-01")
Bill.create(biller_id: Bart.id, bill_recipient_id: guest.id, description: "homemade cookies", balance: "51", date: "2018-09-01")
Bill.create(biller_id: Bart.id, bill_recipient_id: guest.id, description: "homemade cookies", balance: "51", date: "2018-09-01")
Bill.create(biller_id: Bart.id, bill_recipient_id: Homer.id, description: "weekly allowance", balance: "10", date: "2018-08-27")
Bill.create(biller_id: Bart.id, bill_recipient_id: Homer.id, description: "eat my shorts!", balance: "5", date: "2018-08-27")
Bill.create(biller_id: Bart.id, bill_recipient_id: Lisa.id, description: "taking out the trash", balance: "2", date: "2018-08-25")
Bill.create(biller_id: Bart.id, bill_recipient_id: Lisa.id, description: "walking Santa's Little Helper", balance: "2", date: "2018-08-24")

Bill.create(biller_id: Lisa.id, bill_recipient_id: Marge.id, description: "doing the dishes", balance: "51", date: "2018-08-25")
Bill.create(biller_id: Lisa.id, bill_recipient_id: Homer.id, description: "saxophone lessons", balance: "25", date: "2018-08-24")
Bill.create(biller_id: Lisa.id, bill_recipient_id: Bart.id, description: "doing your homework", balance: "51", date: "2018-09-01")
Bill.create(biller_id: Lisa.id, bill_recipient_id: Maggie.id, description: "changing your diapers", balance: "1", date: "2018-08-23")
Bill.create(biller_id: Lisa.id, bill_recipient_id: guest.id, description: "proofreading paper", balance: "11", date: "2018-08-23")
Bill.create(biller_id: Lisa.id, bill_recipient_id: guest.id, description: "snacks for science fair", balance: "8", date: "2018-08-22")
Bill.create(biller_id: Lisa.id, bill_recipient_id: guest.id, description: "book club fee", balance: "4", date: "2018-08-20")
