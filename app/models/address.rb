class Address < ApplicationRecord
  has_one_attached :photo
  belongs_to :user

  validates :name, presence: true
  validates :address, presence: true
  validates :kind_of_place, presence: true
  # validates :floor, numericality: { only_integer: true, greater_than_or_equal_to: 0 }, presence: false
  validates :elevator, exclusion: [nil]

  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
end


# create_table "addresses", force: :cascade do |t|
#   t.string "name"
#   t.string "address"
#   t.string "kind_of_place"
#   t.string "place_in_building"
#   t.integer "floor"
#   t.boolean "elevator"
#   t.text "description"
#   t.bigint "user_id", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["user_id"], name: "index_addresses_on_user_id"
# end
