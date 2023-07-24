import axios from 'axios'


// const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService{
    getAllEmployees(){
        return axios.get("http://localhost:8080/api/employees/allemployees")
}

   createEmployee(employee){
        return axios.post("http://localhost:8080/api/employees/employee", employee)
   }


     getEmployeeById(id){
        return axios.get(`http://localhost:8080/api/employees/`+id)
     }

     updateEmployee(id,employee){
        return axios.put(`http://localhost:8080/api/employees/`+id,employee)
     }

     deleteEmployee(id){
        return axios.delete('http://localhost:8080/api/employees/'+id)
     }

    }
export default new EmployeeService();
