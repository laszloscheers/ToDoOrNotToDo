Rails.application.routes.draw do

  resources :tasks, only:[:new, :create, :edit, :update, :destroy]
  resources :lists, only:[:new, :create, :edit, :update, :destroy]
  devise_for :users

  root 'home#index'
  resources :mytodos, only:[:index]

end
