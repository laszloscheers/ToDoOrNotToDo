require "test_helper"

class MytodosControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get mytodos_index_url
    assert_response :success
  end
end
