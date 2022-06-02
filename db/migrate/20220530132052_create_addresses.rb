class CreateAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :addresses do |t|
      t.string :name
      t.string :address
      t.string :kind_of_place
      t.string :place_in_building, null: true
      t.integer :floor, null: true
      t.boolean :elevator, default: false
      t.text :description
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
