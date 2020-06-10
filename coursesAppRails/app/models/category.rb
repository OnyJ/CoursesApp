class Category < ApplicationRecord
    has_many :join_category_courses
    has_many :courses, through: :join_category_courses
end
