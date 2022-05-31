class AddressesController < ApplicationController

  def index
    @addresses = Address.all.reverse
  end





end
