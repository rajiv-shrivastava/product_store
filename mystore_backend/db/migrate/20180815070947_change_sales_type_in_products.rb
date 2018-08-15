class ChangeSalesTypeInProducts < ActiveRecord::Migration[5.1]
  def change
  	change_column :products, :total_sales, :integer
  end
end
