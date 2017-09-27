class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id
      t.integer :story_id
      t.text :body

      t.timestamps
    end

    add_index :comments, :story_id
    add_index :comments, :author_id
  end
end
