Rails.application.routes.draw do
  devise_for :users
  get 'welcome/index'
  resources :closets do

    end
  root 'welcome#index'
end
