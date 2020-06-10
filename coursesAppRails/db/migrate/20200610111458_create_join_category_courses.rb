class CreateJoinCategoryCourses < ActiveRecord::Migration[6.0]
  def change
    create_table :join_category_courses do |t|
      t.belongs_to :category, index: true
      t.belongs_to :course, index: true
      t.timestamps
    end
  end
end
