Rails.application.routes.draw do
  get 'mytodos/index'
  resources :tasks
  resources :lists
  devise_for :users
  root 'home#index'

end
