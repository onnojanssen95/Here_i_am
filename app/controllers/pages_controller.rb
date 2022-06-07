class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
  end

  def settings
    @user = current_user
  end

private

  def user_params
    params.require(:user).permit(:user_name, :email)
  end

end
