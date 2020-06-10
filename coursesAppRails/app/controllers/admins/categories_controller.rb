class Admins::CategoriesController < ApplicationController
  before_action :authenticate_user!
	before_action :check_if_admin

    def create
        @category = Category.new(category_params)
    
        if @category.save
          render json: @category, status: :created, location: admins_categories_url(@category)
        else
          render json: @category.errors, status: :unprocessable_entity
        end
      end

    def check_if_admin
      @error = 'vous n\'etes pas admin'
      if current_user.role === 'Admin'
          return current_user
      else
          render json: @error, status: :unprocessable_entity
      end
  end
  

  private
  # Use callbacks to share common setup or constraints between actions.
  # def set_category
  #   @category = Category.find(params[:id])
  # end

  # Only allow a trusted parameter "white list" through.
  def category_params
    params.require(:category).permit(:name)
  end

end