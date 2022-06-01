class PinTablesController < ApplicationController

  def new
    @pin_table = PinTable.new
  end

  def index

  end

  def create

  end

  def destroy

  end

  private

  def pin_table_params
    params.require(:description).permit(:name, :address, :kind_of_place, :place_in_building, :floor, :elevator, :description)
  end

end

# create_table "pin_tables", force: :cascade do |t|
#   t.text "description"
#   t.string "pin_type"
#   t.float "latitude"
#   t.float "longitude"
#   t.bigint "address_id", null: false
#   t.datetime "created_at", null: false
#   t.datetime "updated_at", null: false
#   t.index ["address_id"], name: "index_pin_tables_on_address_id"
