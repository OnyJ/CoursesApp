class CreateCourseSessions < ActiveRecord::Migration[6.0]
  def change
    create_table :course_sessions do |t|
      t.datetime :day
      t.boolean :course_session_finished
      t.boolean :course_session_started
      t.integer :max_students, default: 20
      t.integer :room_id

      t.timestamps
    end
  end
end
