Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'users', to: 'users#show'
  # get 'users', controller: 'users', method: :show

  # resources :mobs
  # resources :drops

  resources :mobs do
    resources :drops
  end

end
