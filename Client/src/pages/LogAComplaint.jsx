import React, {useContext} from "react";
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
  LinkTabs,
  DropdownMenu2,
  NavItem,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useForm } from "react-hook-form";
import { CartContext, OpenContext } from "../components/CartContext";



function LogAComplaint () {
  const [cart, setCart] = useContext(CartContext);
    const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
return(

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
          {LinkTabs('hardware',null )}
          <p>|</p>
          <a href= 'https://www.tasweiq.com/partners'>Sell Ads</a>
          <p>|</p>
          {LinkTabs('careers',null)}
          <p>|</p>
          {LinkTabs('aboutus', null)}
          
          {LinkTabs('help','ntrActive' )}
          </ul>
      </nav></div>
    
    <div className ="TopCrumb">
      <div className="TopCrumb-content">
<small><Link to="/LandingPage">Home</Link> </small>
<small> {'>'} </small>
<small><Link to="/Help">Help</Link> </small>
<small> {'>'} </small>
<small><b>Log a Complaint</b> </small>
</div>
    </div>
    <div className="AboutT-section"> 
      <div className="AboutSidebar">
        <Link to= "/Help"><h2><b>Help</b></h2></Link>
        <ul className="sideList">
        <Link to = "/Help/Feedback"><small>Feedback</small></Link>
  <Link to = "/Help/FAQ"><small>FAQ's</small></Link>
  <Link to = "/Help/LogAComplaint"><b><small>Log A Complaint</small></b></Link>
  
</ul>
        <div className="AboutUsContact">
            <div className="AboutUsContact-card">
              <h1>
              Contact Us
              </h1>
              <h2 className="cc-text">
              <img className="cc-img" src={phone}></img>800 - TASWEIQ (827 9347)
              </h2>
              <h2 className="cc-text">
<img className="cc-img" src={email1}></img>contact@tasweiq.com
              </h2>
              <h2 className="cc-text">
              <img className="cc-img" src={form}></img>Contact Form
                </h2>
            </div>
        </div>
      </div>
      <div className="separator"/>
      <div className="AboutContent">
          <h1>Log a Complaint</h1>

<form onSubmit={handleSubmit(onSubmit)}>

                <div className="complaintpadding">
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
      <div className= "formFlow3">
      <input type="text" placeholder="If you are an existing customer, please enter your user ID." name="Customer ID" ref={register} /></div>
</div>

<div className="form2textarea">
<textarea placeholder="Message" className="comment2" name="comment" ref={register} />
</div>

<div className= "HelpForm2">
      <div className= "formFlow4">
      <input type="submit" placeholder="Send" /></div>
</div>
</div>
</div>
</form>
</div>

</div>
<Footer/>
</div>
)
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

export default LogAComplaint;