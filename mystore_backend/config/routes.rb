Rails.application.routes.draw do
  scope '/api' do
    resources :bananas
    resources :products
    post 'user_token' => 'user_token#create'
  end
end
