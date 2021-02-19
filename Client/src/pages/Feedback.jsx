import React,{useContext} from "react";
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


function Feedback () {
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
  <small><b>Feedback</b> </small>
  </div>
      </div> 
      <div className="AboutT-section">
        <div className="AboutSidebar">
          <Link to= "/Help"><h2><b>Help</b></h2></Link>
          <ul className="sideList">
          <Link to = "/Help/Feedback"><b><small>Feedback</small></b></Link>
    <Link to = "/Help/FAQ"><small>FAQ's</small></Link>
    <Link to = "/Help/LogAComplaint"><small>Log A Complaint</small></Link>
    
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
          <h1>Feedback</h1>
          <Tabs>
              <TabList>
                  <Tab>General</Tab>
                  <Tab>Issue With Online Service</Tab>
              </TabList>
              <TabPanel className="Tabpanel-vhp">
                     <p className="vhp"><b>Please fill in the following details to get started.</b></p>
                     <p className="vhp">
                     Thank you for taking the time to fill in the form. We take complaints and feedback seriously and
will deal with your message as soon as possible. Please fill in the fields mentioned below and you
shall hear back from us within 24 business hours.
                     </p>
                     <form onSubmit={handleSubmit(onSubmit)}>
<div className="panelSect1">
                     <p className="vhp"><b>Are you an existing customer?</b></p>
<div className= "HelpForm1">
<div className= "formFlow">
    <input name="Costumer" type="radio" value="Yes " ref={register}/><p>Yes</p></div>
<div className= "formFlow">
    <input name="Costumer" type="radio" value=" No" ref={register}/><p>No</p></div>
</div>

<p className="vhp"><b>What is your overall satisfaction with Tasweiq products and services?</b></p>
<div className= "HelpForm1">
    <div className= "formFlow">
    <input name="satisfaction" type="radio" value="Very Satisfied " ref={register}/><p>Very Satisfied</p></div>
    <div className= "formFlow">
    <input name="satisfaction" type="radio" value=" Satisfied " ref={register}/><p>Satisfied</p></div>
      <div className= "formFlow">
     <input name="satisfaction" type="radio" value=" Dissatisfied" ref={register}/> <p>Dissatisfied</p></div>
      </div>

      <textarea className="comment1" name="comment" ref={register} />

      <p className="vhp"><b>How satisfied are you with Tasweiq products and services in the following areas:</b></p>
      <p className="vhp"><b>Competitive Price</b></p>
<div className= "HelpForm1">
      <div className= "formFlow">
      <input name="Price" type="radio" value="Very Satisfied " ref={register}/><p>Very Satisfied</p></div>
      <div className= "formFlow">
      <input name="Price" type="radio" value=" Satisfied " ref={register}/><p>Satisfied</p></div>
      <div className= "formFlow">
     <input name="Price" type="radio" value=" Dissatisfied" ref={register}/> <p>Dissatisfied</p></div>
    </div>

    <p className="vhp"><b>Timely Response</b></p>
    <div className= "HelpForm1">
    <div className= "formFlow">
      <input name="Response" type="radio" value="Very Satisfied " ref={register}/><p>Very Satisfied</p></div>
    <div className= "formFlow">
      <input name="Response" type="radio" value=" Satisfied " ref={register}/><p>Satisfied</p></div> 
      <div className= "formFlow">  
      <input name="Response" type="radio" value=" Dissatisfied" ref={register}/><p>Dissatisfied</p></div>
</div>

<p className="vhp"><b>Ability to Contact</b></p>
<div className= "HelpForm1">
<div className= "formFlow">
      <input name="ContactAbility" type="radio" value="Very Satisfied " ref={register}/><p>Very Satisfied</p></div>
<div className= "formFlow">
      <input name="ContactAbility" type="radio" value=" Satisfied " ref={register}/><p>Satisfied</p></div>
<div className= "formFlow">
      <input name="ContactAbility" type="radio" value=" Dissatisfied" ref={register}/><p>Dissatisfied</p></div>
</div>

<p className="vhp"><b>Helpfulness and Knowledge of Staff</b></p>
<div className= "HelpForm1">
<div className= "formFlow">
      <input name="Helpfulness" type="radio" value="Very Satisfied " ref={register}/><p>Very Satisfied</p></div>
      <div className= "formFlow">
      <input name="Helpfulness" type="radio" value=" Satisfied " ref={register}/><p>Satisfied</p></div>
      <div className= "formFlow">
      <input name="Helpfulness" type="radio" value=" Dissatisfied" ref={register}/><p>Dissatisfied</p></div>
</div>

<p className="vhp"><b>Would you recommend Tasweiq products or services to others?</b></p>
<div className= "HelpForm1">
<div className= "formFlow">
      <input name="Recommend" type="radio" value="Definitely " ref={register}/><p>Definitely</p></div>
      <div className= "formFlow">
      <input name="Recommend" type="radio" value=" Probably " ref={register}/><p>Probably</p></div>
      <div className= "formFlow">
      <input name="Recommend" type="radio" value=" ProbablyNot" ref={register}/><p>Probably Not</p></div>
</div>

</div>
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
      <input type="tel" placeholder="Mobile number" name="Mobile number" ref={register({required: true, minLength: 6, maxLength: 12})} /></div>
      </div>
      <div className= "HelpForm2">
      <div className= "formFlow3">
      <input type="text" placeholder="If you are an existing customer, please enter your user ID." name="Customer ID" ref={register} /></div>
</div>

<div className= "HelpForm2">
      <div className= "formFlow4">
      <input type="submit" placeholder="Send" /></div>
</div>


</div>
</form>
              </TabPanel>
              <TabPanel>
              <form onSubmit={handleSubmit(onSubmit)}>
              <p className="vhp"><b>Issue with online services</b></p>
                     <p className="vhp">
                     Thank you for taking the time to fill in the form. We take complaints and feedback seriously and
will deal with your message as soon as possible. Please fill in the fields mentioned below and you
shall hear back from us within 24 business hours.
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
      {/* <div className= "HelpForm2">
      <div className= "formFlow3">
      <input type="textarea" placeholder="If you are an exiting customer, please enter your user ID." name="Customer ID" ref={register} /></div>
</div> */}

<div className="form2textarea">
<textarea placeholder="Message" className="comment2" name="comment" ref={register} />
</div>

<div className= "HelpForm2">
      <div className= "formFlow4">
      <input type="submit" placeholder="Send" /></div>
</div>
</div>
</form>

              </TabPanel>
          </Tabs>
         
         
          
         
        </div>
      </div>
      <Footer />
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

export default Feedback;