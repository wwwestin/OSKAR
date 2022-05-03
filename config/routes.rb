Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create, :update]
  resources :patients, only: [:index, :show, :create, :update]
  resources :devices, only: [:index, :show, :create, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  patch "/me", to: "users#update"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me/patients", to: "users#pats"
  patch "/me/patients/:id", to: "patients#update"
  post "me/patients/devices/", to: "devices#create"
  patch "/me/patients/devices/:id", to: "devices#update"
  

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
