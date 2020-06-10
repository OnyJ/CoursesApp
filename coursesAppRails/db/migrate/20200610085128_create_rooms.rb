class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.boolean :available

      t.timestamps
    end
  end
end
