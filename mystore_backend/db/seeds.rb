# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

admin = User.new
admin.email = 'admin@mystore.com'
admin.password = 'adminpassword'
admin.password_confirmation = 'adminpassword'
admin.admin = true
admin.save

user = User.new
user.email = 'user@mystore.com'
user.password = 'userpassword'
user.password_confirmation = 'userpassword'
user.save
