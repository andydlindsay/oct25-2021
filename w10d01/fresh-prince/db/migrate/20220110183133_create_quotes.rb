class CreateQuotes < ActiveRecord::Migration[6.1]
  def change
    create_table :quotes do |t|
      t.string :character
      t.string :quote
      t.references :actor, foreign_key: true, index: true

      t.timestamps
    end
  end
end
