class AddressesController < ApplicationController
  def index
    @addresses = Address.all.reverse
    # @markers = @addresses.geocoded.map do |address|
    #   {
    #     lat: address.latitude,
    #     lng: address.longitude
    #   }
  end

  def show
    @address = Address.find(params[:id])

    @markers = [{
        lat: @address.geocode[0],
        lng: @address.geocode[1]
    }]
  end

  def new
    @address = Address.new
    # @marker = @address.geocode do
    #   {
    #     lat: @address.latitude,
    #     lng: @address.longitude
    # }
    # end
  end

  def create
    @address = Address.new(address_params)
    @address.user = current_user
    # @address.save
    if @address.save
      redirect_to addresses_path(@address)
    else
      render :new
    end
  end

  def edit
    @address = Address.find(params[:id])
  end

  def update
    @address = Address.find(params[:id])
    @address.update(address_params)
    redirect_to address_path(@address)
  end



  def destroy
  end

  private

  def address_params
    params.require(:address).permit(:name, :address, :kind_of_place, :place_in_building, :floor, :elevator, :description)
  end
end
