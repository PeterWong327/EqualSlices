class CreateBills < ActiveRecord::Migration[5.2]
  def change
    create_table :bills do |t|
      t.integer :biller_id, null: false
      t.integer :bill_recipient_id, null: false
      t.text :description, null: false
      t.float :balance, null: false
      t.string :date, null: false

      t.timestamps
    end
    add_index :bills, :biller_id
    add_index :bills, :bill_recipient_id
  end
end
