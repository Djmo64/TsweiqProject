import React from 'react';
import { useForm } from "react-hook-form";
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import { useContext } from 'react';
import {Link} from 'react-router-dom'

const FormDetails = () => {


    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const [forms,setForms] = useContext(FormContext);
    const [prag,setPrag] = useContext(PragContext);

    return(
        <div className= "loginPage">
             
              
        <img className="loginPage-img" src={logo}/>
        <div className='slide5'>
           <h1>Please Review and Submit</h1>
           <div className='ListedProducts'>
             <h2>Listed Products:</h2>
         
             {forms.map((form,index)=>{
                 const ind = index+1;
                
                 return(
                     <div key={index}>
                     <p>{'Product '+ ind + ': '}</p> 
                      
                 <p className='prorev'>{ JSON.stringify(form, null, 2).replace(/[\{\}"]+/g,"")}</p>
                 
                 </div>
                 )
             })}
             {console.log(forms[0])}
          </div>
          <div className="agreementComplete">
            <input type='radio'></input>
            <p>The information I provided is accurate and complete. Checking submit means you have read and agreed to our terms of service.</p>
          </div>
          <Link to='/' className='CompanyLocSubmit' onClick={()=> setPrag(6)}>Submit</Link>
         </div> 
         </div>
    );
}

export default FormDetails