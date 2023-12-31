import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'

function ListEmployeeComponent() {

    const[employees,setEmployees] = useState([])
    //useEffect runs only once at the initial rendering of this component
    useEffect(()=>{
      getAllEmployee();
    }, [])

    const getAllEmployee=()=>{
      EmployeeService.getAllEmployees().then((response)=>{
      setEmployees(response.data)
      console.log(response.data);
      }).catch((error)=>{
        console.log(error);
    })
    }

    const deleteEmployee=(employeeid)=>{
      EmployeeService.deleteEmployee(employeeid).then((response)=>{
        getAllEmployee();
      }).catch((error)=>{
              console.log(error);
      })
    }
  return (
    <div className='container mb-[60px]'>
      <h2 className='text-center'>List Of Employees</h2>
      <Link to = "/add-employee" className='border border-solid border-black bg-cyan-600 p-2 text-black font-bold'> Add Employee </Link>
      <table className='table table-bordered table-striped mt-6'>
        <thead>
          <th>Employee ID</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email ID</th>
          <th>Actions</th>
        </thead>
        <tbody >
          {
            employees.map(
              employee =>
              <tr className='' key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link 
                  className='border border-solid border-black bg-blue-600 my-2 p-[4px] text-black font-bold rounded-md'
                  to={`/edit-employee/${employee.id}`}> Update </Link>
                  <button
                  className='border border-solid border-black bg-red-700 ml-[10px] my-2 p-[4px] text-black font-bold rounded-md'
                 onClick={()=>deleteEmployee(employee.id)}> Delete </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
  )
}

export default ListEmployeeComponent