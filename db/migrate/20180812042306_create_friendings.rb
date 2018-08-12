class CreateFriendings < ActiveRecord::Migration[5.2]
  def change
    create_table :friendings do |t|
      t.integer :friender_id, null: false
      t.integer :friendee_id, null: false

      t.timestamps
    end
    add_index :friendings, :friender_id
    add_index :friendings, :friendee_id
  end
end
