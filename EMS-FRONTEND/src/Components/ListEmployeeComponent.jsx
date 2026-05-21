import React, { useEffect, useState } from 'react'
import { deleteEmployeeById, getAllEmployees } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {
    const [employees,setEmployees]=useState([])
    const navigator=useNavigate();

    useEffect(()=>{
        getEmployees()
    },[])
    function getEmployees(){
         getAllEmployees().then((resp)=>{
            setEmployees(resp.data)
        }).catch(error=>{
            console.error(error)
        })
    }

    const addNewEmployee=()=>{
        navigator('/addEmployee')
    }

    function updateEmployee(id){
        navigator(`/updateEmployee/${id}`)
    }

    function deleteEmployee(id){
        deleteEmployeeById(id).then((res)=>{
            getEmployees()
        }).catch((err)=>{
            console.error(err);
            
        })
        navigator('/employees')
    }
  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-3' onClick={addNewEmployee}>Add Employee</button>
        <table className='table table-stripped table-bordered text-center'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                employees.map(employee=>
                <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                    <td>
                        <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)}>Update</button>
                        <button className='btn btn-danger' onClick={()=>deleteEmployee(employee.id)}
                            style={{marginLeft:'10px'}}
                            >Delete</button>
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