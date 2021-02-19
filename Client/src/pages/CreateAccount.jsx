import React, { useContext, useEffect } from 'react';
import logo from '../Pictures/SignIn/logo-org-blk-side.png'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import Modal from "react-modal";
import check from "../Pictures/LandingPage/check.png";
import SearchData from "../industries.json";
import tasweiq from "../Pictures/LandingPage/CompanyLogo.png";
import cliff from "../Pictures/LandingPage/Whiteppljumpingoffcliff.png"
import balloon from "../Pictures/LandingPage/hotgirlwithballoons.png"
import Autocomplete from '@material-ui/lab/Autocomplete';
import tvc from '../TvComp.json'
import TextField from '@material-ui/core/TextField'; 
import {Upload} from '../components/Upload';
import { PicContext } from '../components/CartContext';
import ppl from '../Pictures/LandingPage/bizppl.jpg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



const Account = () => {
  const [params1,setparams1] = useState('');
  const [params2,setparams2] = useState('');
  const [params3,setparams3] = useState('');
  const [params4,setparams4] = useState('');
    const [registerUsername, setRegisterUsername] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [registerProfilepic, setRegisterProfilepic] = useContext(PicContext);
    const [registerFName, setRegisterFName] = useState()
    const [registerLName, setRegisterLName] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPhone, setRegisterPhone] = useState()
    const [registerMType, setRegisterMType] = useState('None')
    const [registerCompany, setRegisterCompany] = useState('')
    const [registerIndustryType, setRegisterIndustryType] = useState('');
    const [confirmregisterPassword, setconfirmRegisterPassword] = useState('')
    const [amountprev, setamountprev] = useState('$24,000')
    const [amountprev2, setamountprev2] = useState('$72,000')
    const [amountprev3, setamountprev3] = useState('$120,000')
    const [basic, setbasic] = useState(2000)
    const [plus, setplus] = useState(6000)
    const [premium, setpremium] = useState(10000)
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const [code, setCode] = useState('')
    const [contract, setcontract] = useState('');
    const [Checked, setChecked] = useState([])
    const [state, setstate] = useState(1);
    const [company, setCompany] = useState('')
    const [IsRegistered, setIsRegistered] =useState(false);
    const [file, setFile] = useState();


    function getUnique(arr, comp) {
      const unique = arr
        .map((e) => e[comp])
        .map((e, i, final) => final.indexOf(e) === i && i)
        .filter((e) => arr[e])
        .map((e) => arr[e]);
      return unique;
    }
  
    const uniqueIndustryData = getUnique(SearchData, "Industry");
    const IndustryType = uniqueIndustryData.map((SearchResult, index) => {
      return <option key={index} value={SearchResult.Industry}> {SearchResult.Industry}</option>;
    })
    const Company = getUnique(tvc, "AdvertisingOwner");
    const tv = Company.map((item,index) => {
     return <option>{item.AdvertisingOwner}</option>
     })

    const customStyles = {
      content : {
        top                   : '20px',
        left                  : '10%',
        right                 : '10%',
        bottom                : '20px',
        padding               : '0',
        height                :'fit-content',
        overflow              : 'visible',
       
      }
    };
   

    // const handleToggle = (value) => {
        
    //     const currentIndex = Checked.indexOf(value);
    //     const newChecked = [...Checked];

    //     if(currentIndex === -1){
    //         newChecked.push(value)
    //     } else {
    //         newChecked.splice(currentIndex, 1)
    //     }
    //     setChecked(newChecked)
    // }
   function onclick(event){
     SendData(event);
     setstate(2);
   }
  
    function numberWithCommas(x) {
    
      return code.includes('LIMITED50%-ABC')? (x/2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
      : (x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") ;
  }
  const  SendData =  (e) =>{
    e.preventDefault();
    const formData = new FormData();
      formData.append("username", registerUsername);
      formData.append("name", registerFName);
       formData.append("file",registerProfilepic);
      


       axios({
         method: 'POST',
         data: formData,
         url: "http://localhost:8080/api/upload",
     })
     
     .then((res) =>  {
         console.log(res);
         setIsRegistered(true);
         setModalIsOpen(false);
         
       })
       .catch((err) => {
         console.log("Something went Wrong with file upload" + err);
       })
     }

 
    const verify = () =>{
      const payload = {
        name: registerFName + " " + registerLName ,
        username: registerUsername,
        password: registerPassword,
        email: registerEmail ,
        phone: registerPhone ,
        type: registerMType ,
        contract: contract ,
        
        
    }
    console.log(payload)
    axios({
        method: 'POST',
        withCredentials: true,
        data: payload,
        url: "http://localhost:8080/api/emailver"
    })
    
    .then((res) =>  {
        console.log(res);
        console.log(payload.username)
        
      })
      .catch((err) => {
        console.log("Something went Wrong with email" + err);
      })
    }
  
    const register = (e) =>{
      
        const payload = {
            name: registerFName + " " + registerLName ,
            username: registerUsername,
            password: registerPassword,
            email: registerEmail ,
            phone: registerPhone ,
            type: registerMType ,
            contract: contract ,
             
            
        }
        axios({
            method: 'POST',
            withCredentials: true,
            data: payload,
            url: "https://tasweiq.com/api/register"
        })
        
        .then((res) =>  {
            console.log(res)
            console.log(payload.username)
            SendData()
            verify()
            setIsRegistered(true)
            setModalIsOpen(false)
          })
          .catch((err) => {
            console.log("Something went Wrong" );
          })
    };
     
    return (
      <div className="loginPage">
           <img className="loginPage-img" src={logo} />
          {IsRegistered=== false ? <Link className='modalScrollerLink' to="/signin">Back to Sign In</Link>
 : null}
          {IsRegistered === true? 
          <div className="congratsMess"> 
          
          <div className="success-checkmark">
  <div className="check-icon">
    <span className="icon-line line-tip"></span>
    <span className="icon-line line-long"></span>
    <div className="icon-circle"></div>
    <div className="icon-fix"></div>
  </div>
</div>
            <div>
          <h1>Congratulations! You have successfully Registered! Please click the Activation key sent to your email to Authenticate your account.</h1>
           <Link className='modalScrollerLink' to="/signin">Back to Sign In</Link>
           </div>
           </div>
           :null}
           {/* <button
                      className="choosemem"
                      onClick={() => setModalIsOpen(true)}
                    >
                      Back to Sign-up
                    </button> */}
        <Modal
          className="memberprev"
          ariaHideApp={false}
          isOpen={modalIsOpen}
          style={customStyles}
         > 
        <div className="modalbordertop">
            <span onClick={() => setModalIsOpen(false)}>
              <b>x</b>
            </span>
          </div>
          <div className='modaloverlay'>
          {/* section1-------------------------------------------------------- */}
         {state === 1? 
         <>
         
            <img className='picsign'  src={cliff}/>
          <div className="signup-section1">
            <div className='helloAndLogo'>  <h1>Sign-up</h1></div>
            {/* <img src={tasweiq}/> */}
            <div className='coLogo'>
            <Upload/>

            </div>
            <div className="signincontainer">
              
                <div className="signup1-sub">
                  <input
                    type="text"
                    placeholder="First Name"
                    onChange={(e) => setRegisterFName(e.target.value)}
                  />
                   <input
                    type="text"
                    placeholder="Last Name"
                    onChange={(e) => setRegisterLName(e.target.value)}
                  />
                 
                  {console.log(
                    "Full Name: " + registerFName + " " + registerLName
                  )}
                </div>
                <div className="signup1-sub">
                <PhoneInput
                country={'ae'}
                placeholder="Enter phone number"
                value={registerPhone}
                onChange={setRegisterPhone}/>
                 


                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) => setRegisterEmail(e.target.value)}
                  />
                </div>
           
            {console.log(registerPhone)}
                <div className="signup1-sub">
                  <input
                    type="text"
                    placeholder="Username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                  ></input>
                   <input type='date'  placeholder='DD/MM/YYYY'></input>
                 
                </div>
                <div className="signup2-sub">
                 <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                  ></input>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    onChange={(e) => setconfirmRegisterPassword(e.target.value)}
                  ></input>
                
              </div>
              
        {/* <p>Profile Picture: </p> */}


        {/* <div className='upload-container'>
        <form action='#' encType="multipart/form-data" >
        <div className='upload'>
        <label htmlFor="file" className="custom-file-upload">
        <input type="file" name="file" id="file"  onChange={(e) => {
          const newFile = e.target.files[0];
          setFile(e.target.files[0]) }}/>
          <img className={file != null? 'imagecontainer': null} src={file != null?URL.createObjectURL( file): require('../Pictures/LandingPage/cloud-computing.png') }/>
        </label>
        <span>Upload</span>
        </div>
        </form>
        <button onClick={SendData}  className='cropbtn'>Crop</button>
        </div> */}
       
      
            </div>
            {/* <button className='testregister' onClick={register}>register</button> */}
            <div className='modalScroller'>
            <Link className='modalScrollerLink' to="/signin">Back to Sign In</Link>
            <button onClick={onclick}>Continue</button>
            {/* <button onClick={SendData}>Send Data</button> */}
            
            </div>
         </div></>
        : null } 
          {/* section2-------------------------------------------------------- */}
         
         {state===2?
           <>
         
           <img className='picsign'  src={balloon}/>
         <div className="signup-section1">
           <div className='helloAndLogo'><img src={tasweiq}/>  <h1>Sign-up</h1></div>
           <p className="signinorcre">Please Enter Professional Info below </p>
           
          
           <div className="signincontainer">
             
               <div className="signup1-sub">
               {/* <input
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) => setRegisterCompany(e.target.value)}
                ></input> */}
                  {/* <Autocomplete disablePortal={true} name='Cname'
        id="tags-outlined"
        options={tv}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField placeholder='company Name' value={params1} onSelect={(e)=>{
            setparams1(e.target.value);
            setRegisterCompany(e.target.value);}}
          onChange={()=>{
            setparams1(company);
            console.log(company);
          }}
            {...params}
            variant="outlined" name='company' />
        )}
      /> */}

        <select className='Industryselect'
                  type="password"
                  placeholder="Company"
                  onChange={(e) => setRegisterCompany(e.target.value)}
                >
                  <option value=''>Company</option>
                  {tv}
                </select>
                <select className='Industryselect'
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}
                >
                  <option value=''>Industry</option>
                  {IndustryType}
                </select>
                
               </div>
               <div className="signup1-sub">
               <select className='Industryselect'
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}>
                  <option value=''>Company place of Operation</option>
                </select>
                <select className='Industryselect'
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}>
                  <option value=''>City </option>
                </select>
               </div>
          
           
               <div className="signup1-sub">
               <select className='Industryselect2'
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}>
                  <option value=''>How do you sell your product/Services?</option>
                  <option value='ecommerce/online'>Ecommerce/Online</option>
                  <option value='brick and mortar'>Brick {'&'} Mortar</option>
                </select>
               </div>
               <div className="signup1-sub">
               <select className='Industryselect2'
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}>
                  <option value=''>Objective</option>
                  <option value='Drive Sales'>To Drive Sales</option>
                  <option value='Increase awareness'>Increase Awareness</option>
                  <option value='Increase Footfall'>Increase Footfall</option>
                  <option value='Promote Product/Services'>Promote Product/Services</option>
                </select>
             </div>
             <div className="signup4-sub">
               <p>Who does your product/service cater towards?</p>
               <div className='checkboxfordemograph'>
                  <div className='checkboxdemo'>
                    <p>Fashion:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Business/Finance:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Medical:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Construction:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Lifestyle:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Children:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Electronics:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Entertainment/TV:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Health:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Automobile:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Men's:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Women's:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Travel:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>House Wives:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Cooking/Food:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>{'Home & Garden'}:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>News/Politics:</p>
                    <input type='checkbox'></input>
                  </div>
                  <div className='checkboxdemo'>
                    <p>Sports:</p>
                    <input type='checkbox'></input>
                  </div>
                 
               </div>
             </div>
           
           </div>
           {/* <button className='testregister' onClick={register}>register</button> */}
           <div className='modalScroller'>
           <button onClick={()=>setstate(1)}> Back </button>
           <button onClick={()=> setstate(3)}>Continue</button>
           </div>
        </div></>
        :null}
          {/* <div className="signup3-sub">
                <input
                  type="text"
                  placeholder="Company Name"
                  onChange={(e) => setRegisterCompany(e.target.value)}
                ></input>
                <select
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setRegisterIndustryType(e.target.value)}
                >
                  {IndustryType}
                </select>
                {console.log(registerIndustryType)}
                {console.log(registerCompany)}
              </div> */}
          {/* section3-------------------------------------------------------- */}
         
         {state === 3 ?<div className='memberandbtn'>
           <div className="membercontainer">
            <div className="memberCard">
              <div
                style={
                  registerMType.includes("Basic")
                    ? { border: "2px solid rgb(255, 131, 79)" }
                    : null
                }
                className="membercardcontent"
              >
                <div className="memStats">
                  <h3 className="memtype">Basic</h3>
                  <div className="chooseplanbtn">
                    <h1>
                      <sup>$</sup>
                      {amountprev.includes("$24,000")
                        ? numberWithCommas(basic)
                        : amountprev.includes("$38,400 (20% off)")
                        ? numberWithCommas(basic * 0.8)
                        : amountprev.includes("$50,400 (30% off)")
                        ? numberWithCommas(basic * 0.7)
                        : numberWithCommas(basic)}
                      <sub>/month</sub>
                    </h1>
                    <div className="memamountprev">
                      {amountprev.includes("$24,000") ? (
                        <p>Billed Annually</p>
                      ) : null}
                      <p className="memamountprev">{amountprev}</p>
                      <select
                        value={amountprev}
                        onChange={(e) => {
                          const selecetedItem = e.target.value;
                          setamountprev(selecetedItem);
                        }}
                      >
                        <option value="$24,000">12 Months</option>
                        <option value="$38,400 (20% off)">24 Months</option>
                        <option value="$50,400 (30% off)">36 Months</option>
                      </select>
                    </div>
                    <button
                      className="chooseplan"
                      onClick={() => {
                        setRegisterMType("Basic");
                        setcontract(amountprev);
                      }}
                    >
                      {registerMType.includes("Basic") ? "Selected!" : "Select"}
                    </button>
                  </div>
                  <div className="memandchoice">
                    <div className="mem-p-container">
                      <div className="checkp">
                        <img src={check} />
                        <p>Up to 5 users</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to buy ads World Wide</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to high quality production</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to analytics dashboard</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to audio rooms</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to The Hub</p>
                      </div>
                    </div>
                    <div className="promo-choice">
                      <div className="promocodeMem">
                        <p>
                          <b>PROMO CODE:</b>{" "}
                        </p>
                        <input
                          onChange={(e) => {
                            setCode(e.target.value);
                          }}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="memberCard">
              <div
                style={
                  registerMType.includes("Plus")
                    ? { border: "2px solid rgb(255, 131, 79)" }
                    : null
                }
                className="membercardcontent"
              >
                <div className="memStats">
                  <h3 className="memtype">Plus+</h3>
                  <div className="chooseplanbtn">
                    <h1>
                      <sup>$</sup>
                      {amountprev2.includes("$72,000")
                        ? numberWithCommas(plus)
                        : amountprev2.includes("$115,200 (20% off)")
                        ? numberWithCommas(plus * 0.8)
                        : amountprev2.includes("$151,200 (30% off)")
                        ? numberWithCommas(plus * 0.7)
                        : numberWithCommas(plus)}
                      <sub>/month</sub>
                    </h1>
                    <div className="memamountprev">
                      {amountprev2.includes("$72,000") ? (
                        <p>Billed Annually</p>
                      ) : null}
                      <p className="memamountprev">{amountprev2}</p>
                      <select
                        value={amountprev2}
                        onChange={(e) => {
                          const selecetedItem2 = e.target.value;
                          setamountprev2(selecetedItem2);
                        }}
                      >
                        <option value="$72,000">12 Months</option>
                        <option value="$115,200 (20% off)">24 Months</option>
                        <option value="$151,200 (30% off)">36 Months</option>
                      </select>
                    </div>
                    <button
                      className="chooseplan"
                      onClick={() => {
                        setRegisterMType("Plus");
                        setcontract(amountprev2);
                      }}
                    >
                      {registerMType.includes("Plus") ? "Selected!" : "Select"}
                    </button>
                  </div>
                  <div className="memandchoice">
                    <div className="mem-p-container">
                      <div className="checkp">
                        <img src={check} />
                        <p>Up to 10 users</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to buy ads World Wide</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to high quality production</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to analytics dashboard</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to audio rooms</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to the Hub</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to conversion technology tables(3)</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to virtual events</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Dedicated Account Manager</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>5,000 exp points</p>
                      </div>
                    </div>
                    <div className="promo-choice">
                      <div className="promocodeMem">
                        <p>
                          <b>PROMO CODE:</b>{" "}
                        </p>
                        <input
                          onChange={(e) => {
                            setCode(e.target.value);
                          }}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="memberCard">
              <div
                style={
                  registerMType.includes("Premium")
                    ? { border: "2px solid rgb(255, 131, 79)" }
                    : null
                }
                className="membercardcontent"
              >
                <div className="memStats">
                  <h3 className="memtype">Premium </h3>
                  <div className="chooseplanbtn">
                    <h1>
                      <sup>$</sup>
                      {amountprev3.includes("$120,000")
                        ? numberWithCommas(premium)
                        : amountprev3.includes("$192,000 (20% off)")
                        ? numberWithCommas(premium * 0.8)
                        : amountprev3.includes("$252,000 (30% off)")
                        ? numberWithCommas(premium * 0.7)
                        : numberWithCommas(premium)}
                      <sub>/month</sub>
                    </h1>
                    <div className="memamountprev">
                      {amountprev3.includes("$120,000") ? (
                        <p>Billed Annually</p>
                      ) : null}
                      <p className="memamountprev">{amountprev3}</p>
                      <select
                        value={amountprev3}
                        onChange={(e) => {
                          const selecetedItem3 = e.target.value;
                          setamountprev3(selecetedItem3);
                        }}
                      >
                        <option value="$120,000">12 Months</option>
                        <option value="$192,000 (20% off)">24 Months</option>
                        <option value="$252,000 (30% off)">36 Months</option>
                      </select>
                    </div>
                    <button
                      className="chooseplan"
                      onClick={() => {
                        setRegisterMType("Premium");
                        setcontract(amountprev3);
                      }}
                    >
                      {registerMType.includes("Premium")
                        ? "Selected!"
                        : "Select"}
                    </button>
                  </div>
                  <div className="memandchoice">
                    <div className="mem-p-container">
                      <div className="checkp">
                        <img src={check} />
                        <p>Up to 20 users</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to buy ads World Wide</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to analytics dashboard</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to audio rooms</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to the Hub</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>10,000 exp points</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to conversion technology tables(5)</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Access to virtual events</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>Social media management</p>
                      </div>
                      
                      <div className="checkp">
                        <img src={check} />
                        <p>unlimited voice over production</p>
                      </div>
                      <div className="checkp">
                        <img src={check} />
                        <p>unlimited logo {'&'} collateral design</p>
                      </div>
                    </div>
                    <div className="promo-choice">
                      <div className="promocodeMem">
                        <p>
                          <b>PROMO CODE: </b>
                        </p>
                        <input
                          onChange={(e) => {
                            setCode(e.target.value);
                          }}
                          type="text"
                        />
                        {/* <div className="checkboxdiv">
                          <Switch
                            onChange={() => handleToggle(index)}
                            color="primary"
                            inputProps={{
                              "aria-label": "checkbox with default color",
                            }}
                          />
                          <span id={1}>{suh}</span>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
            </div>
             {/* <button className='testregister' onClick={register}>register</button> */}
           <div className='modalScroller'>
           <button onClick={()=>setstate(1)}> Back </button>
           <button onClick={()=> setstate(4)}>Continue</button>
           </div>
            {/* <button
              className="confirmMem"
              onClick={() => setModalIsOpen(false)}
            >
              Confirm
            </button> */}
          </div>: null  } 
          {state === 4?
            <>
         
            <img className='picsign'  src={cliff}/>
          <div className="signup-section1">
            <div className='helloAndLogo'><img src={tasweiq}/>  <h1>Payment Method</h1></div>
            <p className="signinorcre">Please Enter Payment Information below </p>
            
           
            
            {/* <button className='testregister' onClick={register}>register</button> */}
            <div className='modalScroller'>
            <button onClick={()=>setstate(3)}> Back </button>
           <button onClick={register}>Register</button>
           {IsRegistered===true? register: null}
            </div>
         </div></>
           :
           null}
          
          </div>
        </Modal>
      </div>
    );
}

export default Account