class Admins::StudentController < ApplicationController
  def index
    @students = User.where(role: "Student")
    render json: @students
  end

  def destroy
    User.delete(student_params)
  end
  
   private

  def student_params
    params.require(:student).permit(:id)
  end
end
