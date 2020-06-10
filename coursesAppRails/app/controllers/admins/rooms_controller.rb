class Admins::RoomsController < ApplicationController
    before_action :authenticate_user!
    before_action :check_if_admin
  
      def create
          @room = Room.new(room_params)
      
          if @room.save
            render json: @room, status: :created, location: admins_room_url(@room)
          else
            render json: @room.errors, status: :unprocessable_entity
          end
        end
  
    private
    # Use callbacks to share common setup or constraints between actions.
    # def set_category
    #   @room = Category.find(params[:id])
    # end
  
    # Only allow a trusted parameter "white list" through.
    def room_params
      params.require(:room).permit(:available)
    end
  
    def check_if_admin
        @error = 'vous n\'etes pas admin'
        if current_user.role === 'Admin'
            return current_user
        else
            render json: @error, status: :unprocessable_entity
        end
    end
  end