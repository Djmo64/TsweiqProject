import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "../pages/NotFound";
import {
  Header,
  Footer,
  CategoryItem,
  CatyItem,
  DropdownMenu,
  DropdownMenu2,
  LinkTabs,
  NavItem,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import email1 from "../Pictures/AboutUs/email2.png";
import phone from "../Pictures/AboutUs/phone2.png";
import form from "../Pictures/AboutUs/form.png";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import I1 from "../Pictures/ContactUs/ContactI1.png"
import I2 from "../Pictures/ContactUs/ContactI2.png"
import I3 from "../Pictures/ContactUs/ContactI3.png"
import I4 from "../Pictures/ContactUs/ContactI4.png"
import I5 from "../Pictures/ContactUs/ContactI5.png"
import { useForm } from "react-hook-form";



const sidebar = [
    "Vision and Mission",
    "Core Values",
    "What We Do",
    "CEO Message",
    "Our Consultants",
  ];

  function ContactUs() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
      console.log(data);
    };
    return (
      <div>
         <div className='headerandoptions'>
      <Header  className="header-tag">
        <div  className="dropdown-searchbar">
          <div className="ACB">
           <DropdownCat/>
          </div>
          <SearchBox className="searchbar" />
          <div className="searchSvg">
          <Search />
          </div>
        </div>
        <NavItem icon={PinIcon} />
        <NavItem icon={WorldIcon} />
        <NavItem   icon= { CartIcon}>
          <DropdownMenu2/>
        </NavItem> 
        <NavItem icon = {User}>
          <DropdownMenu />
        </NavItem>
        <a href="https://www.tasweiq.com/dashboard" className='gotodashbaord'><b>Analytics Dashboard <span className='gotodashbaord2'>↪</span></b></a>
      </Header>
      <nav className="navtabs">
        <ul className="navtabs-routes">
          <Link className = {null}>The Hub</Link>
          <p>|</p>
          <Link to='/LandingPage' >Home</Link>
          <p>|</p>
          {LinkTabs('buyads',null)}
          <p>|</p>
          {LinkTabs('production', null)}
          <p>|</p>
          {LinkTabs('hardware', null)}
          <p>|</p>
          <a href= 'https://www.tasweiq.com/partners'>Sell Ads</a>
          <p>|</p>
          {LinkTabs('careers',null)}
          
          {LinkTabs('aboutus', 'ntrActive')}
          
          {LinkTabs('help', null)}
          </ul>
      </nav></div>
        <div className ="TopCrumb">
          <div className="TopCrumb-content">
    <small><Link to="/LandingPage">Home</Link> </small>
    <small> {'>'} </small>
    <small><b>ContactUs</b></small>
    {/* <small> {'>'} </small>
    <small><b>About Tasweiq</b> </small> */}
    </div>
        </div>
        <div className="AboutT-section">
          <div className="AboutSidebar">
              <div className="sidebarTop">
            <h2><b>Contact Us</b></h2>
            <p>To learn more about what we can assist you
            please contact us at:
            </p>
            <h3>34th {'&'} 35th Floor,</h3>
            <h3>Al Maqam Tower,</h3>
            <h3>Abu Dhabi Global Markets,</h3>
            <h3>Abu Dhabi, United Arab Emirates</h3>
            <h3>P.O. Box 35665</h3>
            </div>
            <div className="smallContact">
<h2 className="cc-text">
                  <img className="cc-img" src={phone}></img>800 - TASWEIQ (827 9347)
                  </h2>
<h2 className="cc-text">
    <img className="cc-img" src={email1}></img>contact@tasweiq.com
                  </h2>
                  </div>
                  <button className="smallContact-button">Download Location Map</button>
<div className="findUs">
              <p><b>Find us on</b></p>
              <div className="contactI">
                    <img src={I1}/>
                    <img src={I2}/>
                    <img src={I3}/>
                    <img src={I4}/>
                    <img src={I5}/>

              </div>
          </div>
          </div>
          
          <div className="separator"/>
          <div className="AboutContent">
          <form onSubmit={handleSubmit(onSubmit)}>
                     <p className="vhp">
                     If you have any questions or enquiries, please feel free to fill out the below form
and one of Tasweiq’s call center representatives will get back to you.
                     </p>

                     <div className="panelSect2">
<div className= "HelpForm2">
<div className= "formFlow2">
<input type="text" placeholder="First name" name="First name" ref={register({required: true, maxLength: 80})} /></div>
<div className= "formFlow2">
      <input type="text" placeholder="Last name" name="Last name" ref={register({required: true, maxLength: 100})} /></div>
      </div>
      <div className= "HelpForm2">
<div className= "formFlow2">
      <input type="text" placeholder="Email" name="Email" ref={register({required: true, pattern: /^\S+@\S+$/i})} /></div>
      <div className= "formFlow2">
      <input type="tel" placeholder="Contact Number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>
      </div>
      <div className= "HelpForm2">
<div className= "formFlow5">
<select name="Country" ref={register({ required: true })}>
        <option value="NA">Country</option>
        <option value="EU"></option>
        <option value="UAE"></option>
        <option value="CN"></option>
      </select>
      </div>
      </div>
      <div className= "HelpForm2">
<div className= "formFlow5">
<select name="City-State-Region" ref={register({ required: true })}>
        <option value="NA">City/State/Region</option>
        <option value="EU"></option>
        <option value="UAE"></option>
        <option value="CN"></option>
      </select>
      </div>
      </div>
      <div className= "HelpForm2">
<div className= "formFlow5">
<input type="text" placeholder="Subject" name="Subject" ref={register({required: true, maxLength: 100})} />
      </div>
      </div>

<div className="form2textarea">
<textarea placeholder="Message" className="comment2" name="comment" ref={register} />
</div>

<div className= "HelpForm2">
      <div className= "formFlow4">
      <input type="submit" placeholder="Send" /></div>
</div>

</div>
</form>
            
          </div>
        </div>
        <iframe className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.5558262279337!2d54.38818424218574!3d24.500842276718306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2f5bcb81cc2ed32b!2sAbu%20Dhabi%20Global%20Market!5e0!3m2!1sen!2sus!4v1596957807118!5m2!1sen!2sus" width="100%" height="600" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        <Footer />
      </div>
    );
  }
  
  
  const tabs = [
    "New!", "Production", "Hardware", "Analytics", "Sell", "Media", "Help"
  ];
  const tabItems = tabs.map((tab) => (
    <Link to={"/"+tab.replace(/ /g,'')} className="tabIcons"onClick={() => console.log("/"+tab.replace(/ /g,''))} >
      {tab}
    </Link>
  ));
  function Header2(props) {
    return (
      <div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <div className="logoAndText">
              <div className="logoName">
                <img
                  className="logo"
                  src={require("../Pictures/LandingPage/CompanyLogo.png")}
                  alt="company"
                />
                <Link to="/LandingPage"><h1>Tasweiq</h1></Link>
              </div>
            </div>
            {props.children}
          </ul>
        </nav>
        <nav className="navtabs">
          <ul className="navtabs-routes">{tabItems}</ul>
        </nav>
      </div>
    );
  }
  
  
  
  
  
  export default ContactUs;