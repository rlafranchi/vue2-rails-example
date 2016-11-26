module Api
  class EmployeesController < ApiController
    
    def index
      render json: Employee.all
    end

    def create
      employee = Employee.new(employee_params)
      if employee.save
        render :json => employee
      else
        render :json => { :errors => employee.errors.messages }, :status => 422
      end
    end

    def update
      employee = Employee.find(params[:id])
      if employee.update(employee_params)
        render :json => employee
      else
        render :json => { :errors => employee.errors.messages }, :status => 422
      end
    end

    def destroy
      employee = Employee.find(params[:id])
      employee.destroy
    end
    
    private

    def employee_params
      params.require(:employee).permit(:name, :email, :manager)
    end
  end
end
