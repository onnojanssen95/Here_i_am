class AddressesController < ApplicationController

  def index
    @addresses = Address.all.reverse
  end

  def show
    @address = Address.find(params[:id])
  end

  def new
    @address = Address.new
  end

  def create
    @address = Address.new(address_params)
      @address.user = current_user
      # @address.save
      if @address.save
        redirect_to address_path(@address)
      else
        render :new
      end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def address_params
    params.require(:address).permit(:name, :address, :kind_of_place, :place_in_building, :floor, :elevator, :description)
  end

end
