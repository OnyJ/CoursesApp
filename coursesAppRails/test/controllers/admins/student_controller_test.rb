require 'test_helper'

class Admins::StudentControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admins_student_index_url
    assert_response :success
  end

  test "should get delete" do
    get admins_student_delete_url
    assert_response :success
  end

end
