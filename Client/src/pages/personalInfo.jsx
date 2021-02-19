import React from 'react';
import { useForm } from "react-hook-form";
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const PersonalInfo = () => {


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [forms,setForms] = useContext(FormContext);
    const [prag,setPrag] = useContext(PragContext);

    return(
        <div className= "loginPage">
             
              
        <img className="loginPage-img" src={logo}/>
        <div className='slide4'>
           <h1>Step 4</h1>
           <h2>Personal Information</h2>
           <div className='touchpoint2'>
           <div className='infoform'>
             <p>First Name:</p>
             <input type='text'></input>
           </div> 
           <div className='infoform'>
             <p>Email:</p>
             <input type='text'></input>
           </div>
           </div>
           <div className='touchpoint2'>
           <div className='infoform'>
             <p>Last Name:</p>
             <input type='text'></input>
           </div>
           <div className='infoform'>
             <p>Phone:</p>
             <input type='text'></input>
           </div>

           </div>
           <Link to='/formDetails' className='CompanyLocSubmit' >Review and Submit ►</Link>

         </div>
         </div>
    );
}

export default PersonalInfo 