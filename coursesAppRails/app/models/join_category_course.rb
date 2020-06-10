class JoinCategoryCourse < ApplicationRecord
    belongs_to :category
    belongs_to :course
end
