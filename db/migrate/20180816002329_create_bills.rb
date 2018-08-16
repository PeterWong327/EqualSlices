class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :biller_id, null: false
      t.text :description, null: false
      t.float :balance, null: false

      t.timestamps
    end
    add_index :bills, :biller_id
  end
end
