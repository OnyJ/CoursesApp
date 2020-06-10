class RoomsController < ApplicationController

  def index
    @rooms = Room.all
    render json: @rooms
  end

 
  # POST /course_sessions
  def create
    @room = Room.new(params[:id])

    if @room.save
      render json: @room, status: :created, location: @room
    else
      render json: @room.errors, status: :unprocessable_entity
    end
  end

  def show
  end

  def edit
    @room = Room.find(params[:id])
  end

    # PATCH/PUT /course_sessions/1
    def update
        @room = Room.find(params[:id])
        if @room.update(available: params[:available])
          render json: @room
        else
          render json: @room.errors, status: :unprocessable_entity
        end
      end

  def destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_room
    @room = Room.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
#   def room_params
#     params.require(:room)
#     # params.fetch(:course_session, {})
#   end
end
