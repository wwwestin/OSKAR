Rails.application.routes.draw do
  resources :users, only: [:index, :show, :create]
  resources :patients, only: [:index, :show, :create, :update]
  resources :devices, only: [:index, :show, :create]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me/patients", to: "users#pats"
  get "/me/patients/devices", to: "patients#devs"
  patch "/me/patients/:id", to: "patients#update"
  post "me/patients/devices/", to: "devices#create"
  

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
