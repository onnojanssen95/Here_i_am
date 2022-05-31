class AddressesController < ApplicationController
  def index
    @address = Address.all
  end

  def show
  end

  def new
    @address = Address.new
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end
end
