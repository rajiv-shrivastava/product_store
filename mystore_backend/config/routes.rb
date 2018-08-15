Rails.application.routes.draw do
  scope '/api' do
    resources :products 
	get "products/sales/:id" => "products#sales", :as => "products_sales"
    post 'user_token' => 'user_token#create'    
  end
end
