import React, { useState } from 'react'

function ListEmployeeComponent() {

    const[employees,setEmployees] = useState([])
  return (
    <div className='container'>
      <h2 className='text-center'>List Of Employees</h2>
      <table className='table table-bordered table-striped'>
        <thead>
          <th>Employee ID</th>
          <th>Employee First Name</th>
          <th>Employee Last Name</th>
          <th>Employee Email ID</th>
        </thead>
        <tbody>
          {
            employees.map(
              employee =>
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
              </tr>
            )
          }
        </tbody>
      </table>
      </div>
  )
}

export default ListEmployeeComponent