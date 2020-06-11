class Admins::TeacherController < ApplicationController
  
  def index
    @teachers = User.where(role: "Teacher")
    render json: @teachers
  end

  def destroy
    User.delete(teacher_params)
  end
  
   private

  def teacher_params
    params.require(:category).permit(:id)
  end
  
  
end
