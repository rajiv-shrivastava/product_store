class ProductsController < ApplicationController
  before_action :authenticate_user
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    if current_user.admin?
      @products = Product.all
      render json: @products
    end
  end

  # GET /products/1
  def show
    render json: @product
  end

  # POST /products
  def create
    @product = Product.new(product_params)
    if @product.save
      render json: @product, status: :created, location: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /products/1
  def update
    if @product.update(product_params)
      render json: @product
    else
      render json: @product.errors, status: :unprocessable_entity
    end
  end

  # DELETE /products/1
  def deleteproduct
    @product = Product.find(params[:id])
    @product.destroy
  end

  def sales
    @product = Product.find(params[:id])
    @product.total_sales = @product.total_sales + 1 
    @product.save
    render @product
  end

  def updateproduct
    @product = Product.find(params[:id])
    @product.name = params[:name]
    @product.price = params[:price]
    @product.margin = params[:margin]
    @product.total_sales = params[:total_sales]
    if @product.save
      render @product
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product
      @product = Product.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name,:price,:margin,:total_sales) 
    end

end
