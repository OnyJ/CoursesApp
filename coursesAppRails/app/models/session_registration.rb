class SessionRegistration < ApplicationRecord
  belongs_to :user
  belongs_to :course_session
end
