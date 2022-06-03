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
        lng: @address.geocode[1],
        # info_window: render_to_string(partial: "info_window", locals: { address: address })
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
    # raise
    # if address.photo?
      @address = Address.new(address_params)
      @address.user = current_user
      if @address.save
        redirect_to address_path(@address)
      else
        render :new
      end
    # else
    # render :new
    # end
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
    @address = Address.find(params[:id])
    @address.destroy
    redirect_to addresses_path, status: :see_other
    # redirect_to  glamping_set_bookings_path(@booking.glamping_set), status: :see_other
  end

  private

  def address_params
    params.require(:address).permit(:name, :address, :kind_of_place, :place_in_building, :floor, :elevator, :description, :photo)
  end
end
