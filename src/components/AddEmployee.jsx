import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom' //useParam hook contains object that contain key value pairs from url
import EmployeeService from '../services/EmployeeService'

function AddEmployee() {
    const[firstName,setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [emailId, setEmailId]=useState("")

    const {id} = useParams();
// The navigate function has two signatures:

// Either pass a To value (same type as <Link to>) with an optional second { replace, state } arg or
// Pass the delta you want to go in the history stack. For example, navigate(-1) is equivalent to hitting the back button.
// If using replace: true, the navigation will replace the current entry in the history stack instead of adding a new one.
    const navigate = useNavigate();

    const saveOrUpdateEmployee = (e) =>{
        e.preventDefault();

        const employee = {firstName,lastName,emailId}
        // console.log(employee);

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response)=>{
                navigate('/employees')
            }).catch((error)=>{
             console.log(error);
            })
        } else{

            EmployeeService.createEmployee(employee).then((response)=>{
                console.log(response.data);
                navigate('/employees');
            }).catch((error)=>{
                console.log(error);
            })
        }
        
    }
 
    useEffect(()=>{
       EmployeeService.getEmployeeById(id).then((response)=>{
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmailId(response.data.emailId);
              
                console.log(response.data.firstName);
       }).catch((error)=>{
              console.log(error);
       })
    }, [])

    const title=()=>{
           if(id){
            return <h2 className='text-center'>Update Employee</h2>
           }        
           else{
            return  <h2 className='text-center'>Add Employee</h2>;
           }
    }
  return (
    <div>
        <div className='container mt-4'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name : </label>
                                <input
                                type='text' placeholder='Enter first name' className='form-control'
                                name='firstName'
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name : </label>
                                <input
                                type='text' placeholder='Enter Last name' className='form-control'
                                name='lastName'
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className='form-group mb-2'>
                                <label className='form-label'>Email ID : </label>
                                <input
                                type='text' placeholder='Enter valid Email ID' className='form-control'
                                name='emailId'
                                value={emailId}
                                onChange={(e) => setEmailId(e.target.value)}
                                />
                            </div>

                            <button className='border border-solid border-black bg-green-700 p-2 text-black font-bold'
                            onClick={(e)=>{saveOrUpdateEmployee(e)}}> 
                            Submit
                            </button>


                        </form>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

export default AddEmployee