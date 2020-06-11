# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
i = 1
num = 60
courses_array = ["Javascript", "SEA", "UML", "UX Design","Développeur Salesforce", "Développeur d'application - Python"]
categories_array = ["Développement", "Data", "Business","Gestion de projet", "Design", "marketing & communication"]
User.destroy_all
Course.destroy_all

until i > num  do

   User.create(email: "stud#{i}@stud.com", password: "student#{i}", username: "student#{i}", role: "Student")
   User.create(email: "teach#{i}@teach.com", password: "teach#{i}", username: "teacher#{i}", role: "Teacher") if i%10 == 0
   User.create(email: "admin#{i}@admin.com", password: "admin#{i}", username: "administrator#{i}", role: "Admin") if i%20 == 0
   i +=1;
end

courses_array.each_with_index do |course,i|
    Course.create(name: course, teacher_id: User.where(role: "Teacher")[i].id)
end

categories_array.each do |category|
    Category.create(name: category)
end