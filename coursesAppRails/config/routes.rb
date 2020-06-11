Rails.application.routes.draw do

  namespace :admins do
    get 'student/index'
    get 'student/delete'
  end
  namespace :admins do
    get 'teacher/index'
    get 'teacher/delete'
  end
  #resources :categories
  #resources :course_sessions
  resources :session_registrations
  #resources :rooms

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

  namespace :admins do
    resources :categories
    resources :courses
    resources :rooms
    resources :course_sessions
    resources :teacher, only: [:index, :destroy]
    resources :student, only: [:index, :destroy]
  end

  namespace :teachers do 
    resources :session_registrations
  end
end