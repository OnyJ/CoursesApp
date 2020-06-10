class Course < ApplicationRecord
    belongs_to :teacher, class_name: "User"
    has_many :join_category_courses
    has_many :categories, through: :join_category_courses
end
