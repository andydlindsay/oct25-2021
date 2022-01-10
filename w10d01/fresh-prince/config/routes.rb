Rails.application.routes.draw do
  resources :images
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'users', to: 'users#index'
  # get 'users', action: :show, controller: 'users'

  # resources :actors
  # resources :quotes

  resources :actors do
    resources :quotes
  end
end
