Rails.application.routes.draw do
  scope '/api' do
    resources :products 
	get "products/sales/:id" => "products#sales", :as => "products_sales"
    get "products/deleteproduct/:id" => "products#deleteproduct", :as => "deleteproduct"    
    post "updateproduct" => "products#updateproduct", :as => "updateproduct"
    post 'user_token' => 'user_token#create'    
  end
end
