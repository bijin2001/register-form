import React, { useState } from 'react'
import '../App.css'
import inputStyle from './inputStyle.module.css'

function Register() {

    const [name, setName] = useState('');
    const [email,setEmail] = useState('');
    const[phone,setPhone]=useState('');
    const[address,setAddress]=useState('')
    const[gender,setGender]=useState('');
    const[subject,setSubject]=useState('');
    const[date,setDate]=useState(null);
    const[isNameInvalid,setIsNameInvalid]=useState(false);
    const[isEmailInvalid,setIsEmailInvalid]=useState(false);
    const[isPhoneInvalid,setIsPhoneInvalid]=useState(false);
    const[isAddressInvalid,setIsAddressInvalid]=useState(false);
    const[isGenderInvalid,setIsGenderInvalid]=useState(false);
    const[isSubjectInvalid,setIsSubjectInvalid]=useState(false);
    const[isDateInvalid,setIsDateInvalid]=useState(false);
    
    
    
    const register = () =>{
        
        let errorMessage = '';
        if(!name){
            setIsNameInvalid(true) 
            errorMessage = 'name'
         }else{
            setIsNameInvalid(false) 
         }if(!email){
            setIsEmailInvalid(true) 
            errorMessage = 'email'
         }else{
            setIsEmailInvalid(false) 
         }if(!phone){
            setIsPhoneInvalid(true) 
            errorMessage = 'phone'
         }else{
            setIsPhoneInvalid(false) 
         }if(!address){

            setIsAddressInvalid(true) 
            errorMessage = 'address'
         }else{
            setIsAddressInvalid(false) 
         }if(!gender){
            setIsGenderInvalid(true) 
            errorMessage = 'gender'
         }else{
            setIsGenderInvalid(false) 
         }if(!subject){
            setIsSubjectInvalid(true) 
            errorMessage = 'subject'
         }else{
            setIsSubjectInvalid(false) 
         }if(!date){
            setIsDateInvalid(true) 
            errorMessage = 'date'
         }else{
            setIsDateInvalid(false) 
         }   
 

            
         if(errorMessage){
     
             alert('Please fill the form');
         }else{
     
             alert(`Success Name:${name} 
                    Email:${email} 
                    Gender:${gender} 
                    Subject:${subject}
                    Phone : ${phone}
                    Address : ${address}
                    Date : ${date}`
                 )
         }
    }

    const reset = () =>{


        window.location.reload();
    
    }
    return (
        <>
            <div style={{ display: 'flex', placeContent: 'center' }} className='mt-5'>
                <div className='card w-100 container' style={{ placeContent: 'center' }}>
                    <h1 className='container mt-5' style={{ color: '#2d3092' }}>Register Form</h1>
                    <div className='d-flex flex-column justify-content-center align-items-center'>
                        <form className='d-flex flex-column' action="">

                            <input style={{ color: '#2d3092', marginTop: '4em' }}  name='name' className={inputStyle.input} value={name || ""} onChange={(e) => { setName(e.target.value); setIsNameInvalid(!e.target.value.trim()); }} type="text" placeholder='Name' />
                            {
                                isNameInvalid && 
                                <div className='mb-5 text-danger fw-bolder'>Invalid</div>
                            }
                            <h5 className='mt-5' style={{ color: '#2d3092' }}>Contact Details</h5>

                            <input style={{ color: '#2d3092', marginBottom: '1em', marginTop: '1em' }} name='email' className={inputStyle.input} value={email || ""} onChange={(e)=>{setEmail(e.target.value); setIsEmailInvalid(!e.target.value.trim())}} type="email" placeholder='Email' />
                            {
                                isEmailInvalid && 
                                <div className='mb-5 text-danger fw-bolder'>Invalid</div>
                            }



                            <input style={{ color: '#2d3092', marginBottom: '1em', marginTop: '1em' }} name='Phone' className={inputStyle.input} value={phone || ""} onChange={(e)=>{setPhone(e.target.value);setIsPhoneInvalid(!e.target.value.trim())}} type="number" placeholder='Phone Number' />
                            {
                                isPhoneInvalid &&
                                <div className='mb-5 text-danger fw-bolder'>Enter a proper value</div>
                            }

                            <textarea className={inputStyle.input} 
                            style={{ color: '#2d3092', marginBottom: '3em', marginTop: '1em' }} 
                            onChange={(e)=>{setAddress(e.target.value);setIsAddressInvalid(!e.target.value.trim())}}  
                            name="Address" 
                            id="" 
                            cols="20" 
                            rows="10" 
                            placeholder='Address'>

                            </textarea>
                            {
                                isAddressInvalid &&
                                <div className='mb-5 text-danger fw-bolder'>Please enter the address</div>
                            }

                            <div className='row'>
                                <div className='col-sm-12 col-md-6 col-lg-3'>
                                    <h5 style={{color:'#2d3092'}}>Gender</h5>
                                    <input type="radio"  value='Male' name='gender' onChange={(e)=>{setGender(e.target.value);setIsGenderInvalid(!e.target.value.trim())}} />
                                    <label className='ms-3 me-3'>Male</label>
                                    <input id='male' type="radio" name='gender'  value='Female' onChange={(e)=>{setGender(e.target.value);setIsGenderInvalid(!e.target.value.trim())}}/>
                                    <label className='ms-3'>Female</label>

                                    {
                                        isGenderInvalid &&
                                        <div className='mb-5 text-danger fw-bolder'>Please select the gender</div>
                                    }
                                </div>


                                <div className='col-sm-12 col-md-6 col-lg-3'>
                                    <h5 style={{color:'#2d3092'}}>Courses</h5>
                                    <select onChange={(e)=>{setSubject(e.target.value);setIsSubjectInvalid(!e.target.value.trim())}} className={inputStyle.input1} name="course" id="">
                                        <option value="" disabled selected>Courses</option>
                                        <option>Biology</option>
                                        <option>Computer Science</option>
                                        <option>Commerce</option>
                                        <option>Humanities</option>
                                    </select>
                                    {
                                        isSubjectInvalid &&
                                        <div className='mb-5 text-danger fw-bolder'>Please select the subject</div>
                                    }
                                </div>

                                <div className='col-sm-12 col-md-6 col-lg-3'>
                                <h5 style={{color:'#2d3092'}}>Date Of Birth</h5>


                                    <input type="date" name='dob' onChange={(e)=>{setDate(e.target.value);setIsDateInvalid(!e.target.value.trim())}} className={inputStyle.input1} placeholder='dd-mm-yyyy'/>
                                    {
                                        isDateInvalid &&
                                        <div className='mb-5 text-danger fw-bolder'>Please select the date of birth</div>
                                    }

                                </div>



                            </div>
                        </form>
                                <div style={{gap:'30px'}} className='d-flex justify-content-center'>
                                    <button type='button' onClick={register} disabled={isNameInvalid} style={{backgroundColor:'#2d3092', color:'white',borderRadius:'20px'}} className='btn d-flex justify-content-center align-items-center my-5'>Submit</button>
                                    <button type='button' onClick={reset} style={{backgroundColor:'red', color:'white',borderRadius:'20px'}} className='btn d-flex justify-content-center align-items-center my-5'>Reset</button>
                                </div>
                    </div>
                </div>
            </div>

        </>

        
    )
}

export default Register 