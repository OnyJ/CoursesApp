class CourseSession < ApplicationRecord
  belongs_to :room
  has_many :registrations
end
