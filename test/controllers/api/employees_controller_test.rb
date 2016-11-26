require 'test_helper'

module Api
  class EmployeesControllerTest < ActionDispatch::IntegrationTest
    test "GET #index" do
      get api_employees_path, :xhr => true
      assert_response :success 
    end

    test "POST #create" do
      assert_difference('Employee.count', 1) do
        post api_employees_path, params: {
          employee: {
            name: 'Bob',
            email: 'bob@example.com' 
          }
        },
        xhr: true
      end
      assert_response :success
    end

    test "POST #create invalid" do
      post api_employees_path, params: {
        employee: {
          name: '',
          email: '' 
        }
      },
      xhr: true
      assert_response 422
    end

    test "PUT #update" do
      alice = employees(:alice)
      put api_employee_path(alice), params: {
        employee: {
          name: 'Alice',
          email: 'other@example.com' 
        }
      },
      xhr: true
      assert_response :success
    end

    test "PUT #update invalid" do
      post api_employees_path, params: {
        employee: {
          name: '',
          email: '' 
        }
      },
      xhr: true
      assert_response 422
    end

    test "DELETE #destroy" do
      alice = employees(:alice)
      assert_difference('Employee.count', -1) do
        delete api_employee_path(alice)
      end
      assert_response :success
    end
  end
end
