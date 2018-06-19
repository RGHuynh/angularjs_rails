class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body
      t.references :list, index: {unique: true}, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
