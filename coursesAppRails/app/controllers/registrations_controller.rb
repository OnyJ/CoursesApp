class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(user_params)
    resource.save
    render_to_string(resource)
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
