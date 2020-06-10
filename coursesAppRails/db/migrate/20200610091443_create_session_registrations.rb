class CreateSessionRegistrations < ActiveRecord::Migration[6.0]
  def change
    create_table :session_registrations do |t|
      t.integer :grade
      t.references :user, null: false, foreign_key: true
      t.references :course_session, null: false, foreign_key: true

      t.timestamps
    end
  end
end
