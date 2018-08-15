class AppTotalToProducts < ActiveRecord::Migration[5.1]
  def change
  	add_column :products, :total_sales, :number
  end
end
