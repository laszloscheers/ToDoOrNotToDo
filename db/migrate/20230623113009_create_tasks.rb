class CreateTasks < ActiveRecord::Migration[7.0]
  def change
    create_table :tasks do |t|
      t.string :description
      t.boolean :completed
      t.integer :list_id
      t.integer :user_id

      t.timestamps
    end
    add_index :tasks, :list_id
    add_index :tasks, :user_id
  end
end
