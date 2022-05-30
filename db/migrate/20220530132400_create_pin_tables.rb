class CreatePinTables < ActiveRecord::Migration[7.0]
  def change
    create_table :pin_tables do |t|
      t.text :description
      t.string :pin_type
      t.float :latitude
      t.float :longitude
      t.references :address, null: false, foreign_key: true

      t.timestamps
    end
  end
end
