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
  DropdownMenu2,
  LinkTabs,
  NavItem,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import BreadCrumbComp from "../components/BreadCrumbComp"
import VisionAndMission from "../pages/VisionAndMission";
import CoreValues from "../pages/CoreValues";
import WhatWeDo from "../pages/WhatWeDo";
import CEOMessage from "../pages/CEOMessage";
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";
import Attachment6 from "../Pictures/AboutUs/Attachment6.jpg";
import consultant1 from "../Pictures/AboutUs/consultant1.png";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import AboutUs from "../pages/AboutUs"
import { CartContext, OpenContext } from "../components/CartContext";

const sidebar = [
    "Vision and Mission",
    "Core Values",
    "What We Do",
    "CEO Message",
    "Our Consultants",
  ];
  const side = () =>{
    return(
    <ul>
      <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
      <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
      <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
      <Link to = "/AboutUs/CEOMessage"><small>CEO Message</small></Link>
      <Link to = "/AboutUs/OurConsultants"><small>Our Consultants</small></Link>
    </ul>
    )
  }


function OurConsultants() {
  const [cart, setCart] = useContext(CartContext);
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
          
          {LinkTabs('hardware',null )}
          
          <a href= 'https://www.tasweiq.com/partners'>Sell Ads</a>
          <p>|</p>
          {LinkTabs('careers',null)}
          <p>|</p>
          {LinkTabs('aboutus','ntrActive' )}
          <p>|</p>
          {LinkTabs('help', null)}
          </ul>
      </nav></div>
        <div className ="TopCrumb">
        <div className="TopCrumb-content">
  <small><Link to="/LandingPage">Home</Link> </small>
  <small> {'>'} </small>
  <small><Link to="/AboutUs">About</Link> </small>
  <small> {'>'} </small>
  <small><b>Our Consultants</b> </small>
  </div>
      </div>
        <div className="AboutT-section">
          <div className="AboutSidebar"> 
            <h2><b>About Us</b></h2>
            <ul className="sideList">
          <Link to = "/AboutUs"><small>About Tasweiq</small></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
    <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
    <Link to = "/AboutUs/CEOMessage"><small>CEO Message</small></Link>
    <Link to = "/AboutUs/OurConsultants"><b><small>Our Consultants</small></b></Link>
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
            <h1>Our Consultants</h1>
            <img className="pplAbout" src={Attachment6}/>
            <p className="vhp">
            We deliver careful branding management to ensure that your product and/or service is properly oriented
toward its brand mission, to effectively steer your brand toward the direction of its target market, and to
establish the ultimate goal: product preference. We not only emphasize the targeted demographic but also
evaluate the psychographic that governs consumer behavior and react accordingly.
          </p>
          <p className="vhp">
          Brand development is the process of taking your business strategy and discovering what makes it unique
and distinct.
          </p>
          <p className="vhp">
          Our best-practices process is designed to “dig” for the “claim of distinction” that can be developed into a
comprehensive plan that outlines the customer value proposition, positioning statement and brand
attributes (personality, promise, mission etc.). 
          </p>
          <p className="vhp">
          We utilize a 5 step process better known as our ”Pathway to Excellence”
          </p>
          <img className="pplAbout" src={consultant1}/>
          <div className="Career-info">
              <h3>Email our Consultants now with your Query:</h3>
              <button>recruitment@tasweiq.com</button>
          </div>
          </div>
        </div>
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

  export default OurConsultants;