class Admins::CoursesController < ApplicationController
    before_action :authenticate_user!
    before_action :check_if_admin
  
      def create
          @course = Course.new(course_params)
      
          if @course.save
            render json: @course, status: :created, location: admins_course_url(@course)
          else
            render json: @course.errors, status: :unprocessable_entity
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
    #   @course = Category.find(params[:id])
    # end
  
    # Only allow a trusted parameter "white list" through.
    def course_params
      params.require(:course).permit(:name, :teacher_id)
    end
  
  end