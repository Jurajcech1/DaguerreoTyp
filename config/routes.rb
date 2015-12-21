Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create, :show, :destroy]
    resources :users, only: [:show]
    resources :follows, only: [:index, :create, :destroy]
  end
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new]

  root to: "static_pages#root"
end
