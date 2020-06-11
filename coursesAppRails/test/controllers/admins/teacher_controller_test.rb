require 'test_helper'

class Admins::TeacherControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get admins_teacher_index_url
    assert_response :success
  end

  test "should get delete" do
    get admins_teacher_delete_url
    assert_response :success
  end

end
