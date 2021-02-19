import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import {Link} from 'react-router-dom'
import NumPad from 'react-numpad';
import countries from '../components/countries';
import CountdownTimer from "react-component-countdown-timer";
import { Footer } from './LandingPage';
import { useState } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvc from '../TvComp.json'
import TextField from '@material-ui/core/TextField';
import TVForm from '../components/TVForm';
import RadioForm from '../components/RadioForm';
import CinemaForm from '../components/CinemaForms';
import PrintForm from '../components/PrintForm';
import OOHForm from '../components/OOHForm';
import { FormContext, FormProvider, PragContext, PragProvider } from '../components/FormContext';
import { useContext } from 'react';

export default function ProductForm() {
  const { register, handleSubmit, errors } = useForm();
  const [value2, setValue2] = useState('');
  const onSubmit = data => console.log(data);
  const [forms,setForms] = useContext(FormContext);
  const [prag,setPrag] = useContext(PragContext);
  const [params1,setparams] = useState('');
  const [selected1,setselected1] = useState(false);
  const [selected2,setselected2] = useState(false);
  const [selected3,setselected3] = useState(false);
  const [selected4,setselected4] = useState(false);
  const [selected5,setselected5] = useState(false);
  const [selected6,setselected6] = useState(false);
  const handleChange2 = (value2) => {
    setValue2(Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( value2));
  };
 
    function getUnique(arr, comp) {
      // store the comparison  values in array
      const unique = arr
        .map((e) => e[comp])
  
        // store the indexes of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
  
        // eliminate the false indexes & return unique objects
        .filter((e) => arr[e])
        .map((e) => arr[e]);
  
      return unique;
    }
    const Company = getUnique(tvc, "AdvertisingOwner");
   const tv = Company.map((item,index) => {
    return item.AdvertisingOwner
    })
  return (
    
      
    <div className= "loginPage">
             
              
    <img className="loginPage-img" src={logo}/>
    {prag === 1 ? 
    <div className='slide1'>
        <h1>Step 1</h1>

      
        <div className='coName'>
          <div className='compN'>
          <p>Please Select Your Company Name: </p>
          <Autocomplete
        id="tags-outlined"
        options={tv}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField value={params1} onSelect={(e)=>setparams(e.target.value)}
          onChange={console.log(params1)}
            {...params}
            variant="outlined"/>
        )}
      /> </div>
      
        </div>
        {params1 === 'Other' ? 
        <div className='textfieldOther'>
      <p>Please Specify:</p>
      <TextField className='textfieldothertext' variant='outlined'   /></div>
    : null}
        <div className='operation'>
        <p>Countries of operation:</p>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={countries}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"/>
        )}
      /></div>
      <button className='CompanyLocSubmit' onClick={()=> setPrag(prag+1)}>Continue ►</button>
    </div>: null}
          {prag === 2?
          <div className='slide2'>
            <h1>Step 2</h1>
            <h2>Select the type of touchpoint you would like to enlist:</h2>
            <small>(please note you are able to selct more than one option)</small>
            <div className='touchpoint1'>
              <button onClick={()=>setselected1(!selected1)}style={selected1 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>TV</button>
              <button onClick={()=>setselected2(!selected2)} style={selected2 === true ? {fontSize: '14px', background: 'rgb(255,131,79)', color: 'white'} :  { fontSize: '14px',background: 'transparent', color: 'black'}}>FREELANCE PRODUCTION</button>
            </div>
            <div className='touchpoint1'>
              <button onClick={()=>setselected3(!selected3)} style={selected3 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>RADIO</button>
              <button onClick={()=>setselected4(!selected4)}style={selected4 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>CINEMA</button>
            </div>
            <div className='touchpoint1'>
              <button onClick={()=>setselected5(!selected5)}style={selected5 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>PRINT</button>
              <button onClick={()=>setselected6(!selected6)}style={selected6 === true ? { background: 'rgb(255,131,79)', color: 'white'} :  { background: 'transparent', color: 'black'}}>OOH</button>
            </div>
            <button className='CompanyLocSubmit' onClick={()=> setPrag(prag+1)}>Continue ►</button>
          </div>
          :null}
        {prag === 3?
        <div className='slide3'>
          <h1>Step 3</h1>
            {selected1 === true ? 
          <div className='tvform2'>
              <TVForm/>
          </div> : null }
          {selected2 === true ? 
          <div className='Productform'>

          </div> : null }
          {selected3 === true ? 
          <div className='Radioform'>
            <RadioForm/>
          </div> : null }
          {selected4 === true ? 
          <div className='cinemaform'>
            <CinemaForm/>
          </div> : null }
          {selected5 === true ? 
          <div className='printform'>
            <PrintForm/>
          </div> : null }
          {selected6 === true ? 
          <div className='oohform'>
            <OOHForm/>
          </div> : null }
          <Link to='/personalInfo' className='CompanyLocSubmit' >Continue ►</Link>

        </div>
         : null}
         {prag === 4? 
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
         :null}
         {prag === 5?
         <div className='slide5'>
           <h1>Please Review and Submit</h1>
           <div className='ListedProducts'>
             <p>Listed Products:</p>
             
             {console.log(forms[0][1][0])}
          </div>
          <div className="agreementComplete">
            <input type='radio'></input>
            <p>The information I provided is accurate and complete. Checking submit means you have read and agreed to our terms of service.</p>
          </div>
          <button className='CompanyLocSubmit' onClick={()=> setPrag(prag+1)}>Submit</button>
         </div> 
         : null}
          {prag === 6?
         <div className='slide6'>
           <h1>Congrats!</h1>
           <div className='congratsMess'>
           <p>You are officially listed onto the Tasweiq platform. A member of our team will be in touch shortly to provide you with your login information and how to access your personalized dashboard.</p>
            <p>Should you require any further assistance, do not hesitate to reach out via the below email address:</p>
            </div>
          
            <button className='CompanyLocSubmit' >partners@tasweiq.com</button>

         </div> 
         : null}
    </div>
   
    
  );
  
}


 //for other login page
 //countdown timer
//  const SingIn = () => {

//   const { register, handleSubmit, errors } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };
//   let date = new Date('January 1, 2021 03:22:34');
  
//   let today = new Date();
//   let dd = String(today.getDate()).padStart(2, '0');
//   let mm = String(today.getMonth() + 1).padStart(2, '0'); 
//   let yyyy = today.getFullYear();

//   today = mm + '/' + dd + '/' + yyyy;
//   let today2 = new Date(today);


//   let date3 = (date.getTime() - today2.getTime())/1000;
//   console.log(date3)
//   console.log(date.getTime())
//   console.log(today2.getTime())
//   return(
//           <div className= "loginPage">
           
            
//               <img className="loginPage-img" src={logo}/>
              


              
              
          
//           <div className="countdown-sect">
//           <CountdownTimer className="coundowntimer"  count={date3} backgroundColor="lightblue" noPoints size ={80} labelSize={20} showTitle={true} border={true} responsive color="rgb(255, 131, 79)" />
//           </div>
//           <div className="sign-in-container-front-page">
//             <div className='buyer'>
//             <p>Buyer</p>
//             <input type='text' placeholder='Name'></input>
//             <input type='text' placeholder='Email'></input>
//             <div className ='privandsub'>
//             <div className='privacy'>
//               <input type='radio'></input>
//               <small>Privacy</small>
//             </div>
//             <div className='submit'>
//               <button><Link to="/supplier">Submit</Link></button>
//             </div>
//             </div>
//             <p className='signinwith'> Or sign in with:</p>
//             <button className='googlebtn'> Sign in
//             </button>
//             <button className='facebookbtn'>Sign in
//             </button>
//             </div>
//             <div className="devider"></div>
//             <div className='buyer'>
//             <p>Supplier</p>
//             <input type='text' placeholder='Name'></input>
//             <input type='text' placeholder='Email'></input>
//             <div className ='privandsub'>
//             <div className='privacy'>
//               <input type='radio'></input>
//               <small>Privacy</small>
//             </div>
//             <div className='submit'>
//               <button><Link to="/supplier">Submit</Link></button>
//             </div>
//             </div>
//             </div>
//           </div>
//             <button className='passthrough'><Link to="/LandingPage">
//             Landing Page</Link>
//           </button>
//               <div className='footer'>
//               <Footer/>
//               </div>
             
//           </div>
//   )
// }

