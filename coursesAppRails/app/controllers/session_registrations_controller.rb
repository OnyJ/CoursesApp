class SessionRegistrationsController < ApplicationController
  respond_to :json
  before_action :set_course_session, only: [:show, :update, :destroy]

    # GET /course_sessions
    def index
        @session_registration = SessionRegistration.all
    
        render json: @session_registration
      end

  # POST /course_sessions
  def create
    @session_registration = SessionRegistration.new(session_registration_params)

    if @session_registration.save
      render json: @session_registration, status: :created, location: @session_registration
    else
      render json: @session_registration.errors, status: :unprocessable_entity
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_session_registration
    @session_registration = SessionRegistration.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def session_registration_params
    params.fetch(:session_registration, {})
  end

  
end
