Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :posts, only: [:index, :create, :show, :destroy]
  end
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new, :show]

  root to: "static_pages#root"
end
