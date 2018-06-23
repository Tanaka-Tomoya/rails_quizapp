Rails.application.routes.draw do
  resources :four_choice_questions
  get '/' =>  'home#top'
  get '/create' => 'home#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
