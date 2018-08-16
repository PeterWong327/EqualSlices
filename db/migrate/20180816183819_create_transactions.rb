class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :balance_to_pay, null: false
      t.integer :bill_id, null: false
      t.integer :bill_recipient_id, null: false
      t.boolean :settled, default: false

      t.timestamps
    end
    add_index :transactions, :bill_id
    add_index :transactions, :bill_recipient_id
  end
end
