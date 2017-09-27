Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :stories, only: [:create, :update, :destroy, :show, :index] do
      resources :comments, only: [:create, :index, :show]
    end
    resources :comments, only: [:destroy]
    resources :follows, only: [:create, :destroy]
  end
end
