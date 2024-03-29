Rails.application.routes.draw do
  devise_for :users
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # resources :addresses, only:[:new,:show,  :index, :create, :edit, :update]
  resources :addresses do
    resources :pin_table, only: [:new, :index, :create, :destroy]
  end
  get"/settings", to: "pages#settings"
  delete"/setting", to: "settings#sessions_destroy"
end
