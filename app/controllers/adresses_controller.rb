class AdressesController < ApplicationController

  def index
    @address = Address.all.reverse
  end

end
