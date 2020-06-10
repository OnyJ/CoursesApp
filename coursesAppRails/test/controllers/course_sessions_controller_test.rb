require 'test_helper'

class CourseSessionsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @course_session = course_sessions(:one)
  end

  test "should get index" do
    get course_sessions_url, as: :json
    assert_response :success
  end

  test "should create course_session" do
    assert_difference('CourseSession.count') do
      post course_sessions_url, params: { course_session: {  } }, as: :json
    end

    assert_response 201
  end

  test "should show course_session" do
    get course_session_url(@course_session), as: :json
    assert_response :success
  end

  test "should update course_session" do
    patch course_session_url(@course_session), params: { course_session: {  } }, as: :json
    assert_response 200
  end

  test "should destroy course_session" do
    assert_difference('CourseSession.count', -1) do
      delete course_session_url(@course_session), as: :json
    end

    assert_response 204
  end
end
