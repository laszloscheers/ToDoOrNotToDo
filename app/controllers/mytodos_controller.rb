class MytodosController < ApplicationController

  protect_from_forgery with: :exception
  before_action :authenticate_user!

  def index
    @list = List.new
    @task = Task.new
  end

end
