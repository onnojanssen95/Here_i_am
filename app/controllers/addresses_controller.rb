class AddressesController < ApplicationController

  def index
    @addresses = Address.all.reverse
  end

  def show
  end

  def new
  end

  def create
    @address = Address.new(address_params)
      @address.user = current_user
      @address.save
      if @address.save
        redirect_to address_path(@address)
      else
        render :new
      end
  end

  @glamping_set = GlampingSet.new(glamping_set_params)
    @glamping_set.user = current_user
    @glamping_set.save
  # No need for app/views/glamping_sets/create.html.erb
    redirect_to glamping_set_path(@glamping_set)

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
