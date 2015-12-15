Rails.application.routes.draw do
  resource :session, only: [:create, :destroy, :new]
  resources :users, only: [:create, :new, :show]

  root to: "static_pages#root"
end
