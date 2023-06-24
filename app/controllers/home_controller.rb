class HomeController < ApplicationController
  protect_from_forgery with: :exception

  def index
    if user_signed_in?
      redirect_to mytodos_index_path
    end
  end
  
end
