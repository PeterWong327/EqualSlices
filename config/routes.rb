Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
namespace :api, defaults: {format: :json} do
  resources :users, only: [:index, :create]
  resource :session, only: [:create, :destroy, :show]
  resources :friendings, only: [:create, :index, :show, :destroy]
  resources :bills, only: [:create, :index, :show, :update, :destroy]
  resources :transactions, only: [:create, :index, :show, :update]
end

root "static_pages#root"

end
