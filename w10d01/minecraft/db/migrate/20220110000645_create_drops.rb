class CreateDrops < ActiveRecord::Migration[6.1]
  def change
    create_table :drops do |t|
      t.string :item
      t.string :enchantment
      t.string :biome
      t.references :mob, foreign_key: true, index: true

      t.timestamps
    end
  end
end
