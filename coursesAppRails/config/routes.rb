Rails.application.routes.draw do

  resources :categories
  resources :course_sessions
  resources :session_registrations
  resources :rooms

  resources :courses
  devise_for :users,
             path: '',
             path_names: {
               sign_in: 'login',
               sign_out: 'logout',
               registration: 'signup'
             },
             controllers: {
               sessions: 'sessions',
               registrations: 'registrations'
             }
end