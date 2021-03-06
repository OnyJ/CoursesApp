class Admins::CourseSessionsController < ApplicationController
    before_action :check_if_admin
  
    # GET /course_sessions
    def index
      @course_sessions = CourseSession.all
  
      render json: @course_sessions
    end
  
    # GET /course_sessions/1
    def show
      render json: @course_session
    end
  
    # POST /course_sessions
    def create
      @course_session = CourseSession.new(course_session_params)
  
      if @course_session.save
        render json: @course_session, status: :created, location: admins_course_sessions_url(@course_session)
      else
        render json: @course_session.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /course_sessions/1
    def update
      if @course_session.update(course_session_params)
        render json: @course_session
      else
        render json: @course_session.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /course_sessions/1
    def destroy
      @course_session.destroy
    end
  
    private
      # Use callbacks to share common setup or constraints between actions.
      def set_course_session
        @course_session = CourseSession.find(params[:id])
      end

      def check_if_admin
          @error = 'vous n\'etes pas admin'
          if current_user.role === 'Admin'
              return current_user
          else
              render json: @error, status: :unprocessable_entity
          end
      end
      # Only allow a trusted parameter "white list" through.
      def course_session_params
        params.require(:course_session).permit(:room_id, :date)
        # params.fetch(:course_session, {})
      end
  end
  