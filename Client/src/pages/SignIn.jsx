import React from 'react';
import { useForm } from "react-hook-form";
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import {Link} from 'react-router-dom'
import NumPad from 'react-numpad';
import countries from '../components/countries';

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
import { useContext, useEffect } from 'react';
import axios from 'axios';
import Account from './CreateAccount';
import { UserContext } from '../components/CartContext';



const SingIn = () => {
 
  const [loginPassword, setLoginPassword] = useState('')
  const [loginUsername, setLoginUsername] = useState('')
  const [data, setData] = useContext(UserContext)
  

  

 
    function getUser(){
     return(
    axios({ 
      method: 'GET',
      withCredentials:true,
      url: "http://localhost:8080/api/user"
  })
  .then((res) => {setData(res.data)})
  )}; 
  
 


 

  function login(){
    const payload = {
       
      username: loginUsername,
      password: loginPassword,
      
      
  }
  return(
    axios({
      method: 'POST',
      withCredentials:true,
      data: payload,
      url: "http://localhost:8080/api/login"
  })
  .then((res) => {
    console.log(res.data);
    getUser();
  }
    )
    
  
  )}

  
     
    return(
            <div className= "loginPage">
                <img className="loginPage-img" src={logo}/>
                <div className='signinbox'>
                  <div className="signin-section">
                    {
                      data.length !== 0  ? <h2>Welcome Back, {data.name}!</h2> : <h1>Hello</h1>
                    }
                    {data?<Link to='/LandingPage'><button className='signincont'>Continue</button></Link>: null}
                    { !data.username  ? 
                    <>
                    <p className='signinorcre'>Sign in to Tasweiq or <Link to='/createaccount' className='signinLinks'>create an account</Link></p>
                    <input type='text' placeholder='Email or Username' onChange={(e)=> setLoginUsername(e.target.value)}></input>
                    <input type='password' placeholder='Password' onChange={(e)=> setLoginPassword(e.target.value)} ></input>
                    
                    <button onClick={()=>{login();getUser();{console.log(data)} }} className='signincont'>Sign In</button>
                    <div className='or'>
                    <hr></hr><b><p>or</p></b><hr></hr>
                    </div>
                    <button className='googlebtn'> Sign in
                     </button>
                     <button className='facebookbtn'>Sign in
                    </button>
                    <div className='radiosignin'>
                      <input className="radiosigninbtn" type='radio'></input>
                      <p>Stay signed in</p>
                    </div>
                    <p className='signinorcre2'>Using a public or shared device?</p>
                    <p className='signinorcre2'>Uncheck to protect your account</p>
                    <p className='signinorcre2'><Link to='/signin' className='signinLinks'>Learn More</Link></p>
                    </>
                    :null}
                  </div>
                </div>


                
                
               
             </div>
    )
}

export default SingIn