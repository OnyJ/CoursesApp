class Teachers::SessionRegistrationsController < ApplicationController
    before_action :check_if_teacher
  
    # GET /course_sessions
    def index
      @session_registrations = SessionRegistration.all
  
      render json: @session_registrations
    end
  

  
    # PATCH/PUT /course_sessions/1
    def update
        @session_registration = SessionRegistration.find(params[:id])
      if @session_registration.update(session_registration_params)
        render json: @session_registration
      else
        render json: @session_registration.errors, status: :unprocessable_entity
      end
    end
  

  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_session_registration
        @session_registration = SessionRegistration.find(params[:id])
      end

      def check_if_teacher
          @error = 'vous n\'etes pas prof'
          if current_user.role === 'Teacher'
              return current_user
          else
              render json: @error, status: :unprocessable_entity
          end
      end
      # Only allow a trusted parameter "white list" through.
      def session_registration_params
        params.require(:session_registration).permit(:user_id, :grade, :user_id, :course_session_id)
        # params.fetch(:course_session, {})
      end
  end
  