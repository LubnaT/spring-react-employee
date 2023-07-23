import axios from 'axios'


// const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService{
    getAllEmployees(){
        return axios.get("http://localhost:8080/api/employees/allemployees");
}

}

export default new EmployeeService();
