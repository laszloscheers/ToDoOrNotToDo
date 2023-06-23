class CreateLists < ActiveRecord::Migration[7.0]
  def change
    create_table :lists do |t|
      t.string :title
      t.integer :user_id

      t.timestamps
    end
    add_index :lists, :user_id
  end
end
