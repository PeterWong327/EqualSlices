class CreateTransactions < ActiveRecord::Migration[5.2]
  def change
    create_table :transactions do |t|
      t.float :amount_paid, null: false
      t.integer :bill_id, null: false
      t.integer :trans_initiator_id, null: false
      t.integer :trans_recipient_id, null: false
      t.boolean :settled, default: false

      t.timestamps
    end
    add_index :transactions, :bill_id
    add_index :transactions, :trans_initiator_id
    add_index :transactions, :trans_recipient_id
  end
end
