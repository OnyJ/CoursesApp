class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, 
         :jwt_authenticatable,
         jwt_revocation_strategy: JwtBlacklist

         has_many :courses, foreign_key: 'course_id', class_name: "Course"
end