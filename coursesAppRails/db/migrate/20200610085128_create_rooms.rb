class CreateRooms < ActiveRecord::Migration[6.0]
  def change
    create_table :rooms do |t|
      t.boolean :available, default: true

      t.timestamps
    end
  end
end
