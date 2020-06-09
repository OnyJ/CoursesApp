class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)
    resource.save
    render_resource(resource)
  end

  private

  def sign_up_params
    params.require(:user).permit(:last_name, :first_name, :username, :role, :email, :password, :password_confirmation)
  end
end