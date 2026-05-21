import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react'
import { createEmployee, getEmployeeById, updateEmployee } from '../Services/EmployeeService';
import { useNavigate, useParams } from 'react-router-dom';

const AddEmployeeComponent = () => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [email,setEmail]=useState('');
    const navigator=useNavigate();
    const {id}=useParams();

    const [errors,setErrors]=useState({
        firstName:'',
        lastName:'',
        email:''
    })


    function clearError(field, value) {
        if (value.trim()) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    }

    function saveOrUpdateEmployee(event){
        event.preventDefault();
       if(validateForm()){
        const employee={firstName,lastName,email}
        console.log(employee)

        if(id){
            updateEmployee(id,employee).then((res)=>{
                confirm.log(res.data)
            }).catch((err)=>{
                console.error(err);
                
            })
            navigator('/employees')

        }else{
        createEmployee(employee).then((resp)=>{
            console.log(resp.data)
        }).catch((err)=>{
                console.error(err);
                
            })
        navigator('/employees')
     }
       }
    }


    function validateForm(){
        let valid=true
        const cpError = {...errors}

        if(firstName.trim()){
            cpError.firstName=''
        }else{
            cpError.firstName='First Name is Required'
            valid=false
        } 

        if(lastName.trim()){
            cpError.lastName=''
        }else{
            cpError.lastName='Last Name is Required'
            valid=false
        } 

        if(email.trim()){
            cpError.email=''
        }else{
            cpError.email='Email ID is Required'
            valid=false
        }

        setErrors(cpError)
        return valid
    }
    function pageTtitle(){
        if(id) return <h2 className='text-center'>Update Employee</h2>
        else return <h2 className='text-center'>Add Employee</h2>
    }

    useEffect(()=>{
        if(id) getEmployeeById(id).then((res)=>{
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setEmail(res.data.email)
        }).catch((err)=>{
            console.error(err);
            
        })
    },[id])
  return (
    <div className='container mt-5'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3  offset-md-3'>
                {pageTtitle()}
                <div className='card-body'>
                    <form action="">
                        <div className='form-group mb-2'>
                            <label className="form-label" htmlFor="firstName">First Name</label>
                            <input className={`form-control ${errors.firstName? 'is-invalid':''}`} 
                            type="text" placeholder='Enter First Name' name="firstName" 
                            value={firstName}
                            onChange={(event) => { setFirstName(event.target.value); clearError('firstName', event.target.value); }}
                            ></input>
                            {errors.firstName && <div className='invalid-feedback'>{errors.firstName}</div>}
                        </div>

                         <div className='form-group mb-2'>
                            <label htmlFor="lastName">Last Name</label>
                            <input className={`form-control ${errors.lastName? 'is-invalid':''}`}
                            type="text" placeholder='Enter Last Name' name="lastName" 
                            value={lastName}
                            onChange={(event) => { setLastName(event.target.value); clearError('lastName', event.target.value); }}
                            ></input>
                            {errors.lastName && <div className='invalid-feedback'>{errors.lastName}</div>}
                        </div>

                         <div className='form-group mb-2'>
                            <label htmlFor="email">Email ID</label>
                            <input className={`form-control ${errors.email? 'is-invalid':''}`} 
                            type="text" placeholder='Enter Email ID' name="email" 
                            value={email}
                            onChange={(event) => { setEmail(event.target.value); clearError('email', event.target.value); }}
                            ></input>
                            {errors.email && <div className='invalid-feedback'>{errors.email}</div>}
                        </div>
                    <button className="btn btn-success mt-1" onClick={saveOrUpdateEmployee}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployeeComponent