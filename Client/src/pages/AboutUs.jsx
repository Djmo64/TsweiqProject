import React, { useContext, useState } from "react";
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
  NavItem,
  LandingPage, DropdownCat, LinkTabs
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
import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import BreadCrumbComp from "../components/BreadCrumbComp"
import VisionAndMission from "../pages/VisionAndMission";
import CoreValues from "../pages/CoreValues";
import WhatWeDo from "../pages/WhatWeDo";
import CEOMessage from "../pages/CEOMessage";
import OurConsultants from "../pages/OurConsultants";
import { CartContext, OpenContext } from "../components/CartContext";
import { DropdownMenu2 } from "./LandingPage";
import video from '../Videos/ExplainerFinal2.mp4';
import ReactPlayer from "react-player";
import NotiCart from "../icons/NotiCart.svg";
import geo from "../icons/geo.svg";
import {NotiBell} from "../components/NotiBell";


const sidebar = [
  "Vision and Mission",
  "Core Values",
  "What We Do",
  "CEO Message",
  "Our Consultants",
];




const AboutUs = () => {
  return (
      <Switch>
        <Route exact path="/AboutUs" component={AboutTasweiq} />
        <Route exact path="/LandingPage" component={LandingPage}/>
        <Route exact path="/AboutUs/VisionAndMission" component={VisionAndMission}/>
        <Route exact path="/AboutUs/CoreValues" component={CoreValues} />
        <Route exact path="/AboutUs/WhatWeDo" component={WhatWeDo} />
        <Route exact path="/AboutUs/CEOMessage" component={CEOMessage} />
        <Route exact path="/AboutUs/OurConsultants" component={OurConsultants} />
        <Route exact path="/NotFound" component={NotFoundPage} />
        <Redirect to="/LandingPage" />
      </Switch>
 
  );
};


function AboutTasweiq() {
  const [cart, setCart] = useContext(CartContext);
  const [notiState, setNotiState] = useState(4);
  const [notiItems, setNotiItems] = useState(false)
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
        <div className='iconcontainer'>
        <NavItem icon={geo} />
        <div className='LangChanger'>
          <div className='Lang-content'>
          <p><b>عربي</b></p>
          </div>
          </div>
        <NavItem   icon= {NotiCart}>
          <DropdownMenu2/>
        </NavItem> 
        
        <div className='notibellcontainer' onClick={()=> {setNotiState(0); setNotiItems(!notiItems);}}>
        <NotiBell className='notibell'  alerts={notiState}/>
       </div>
        {notiItems === true?
        <div className='notidrop'>No new notifications</div>
      :null}
        <NavItem icon = {User}>
          <DropdownMenu />
         
        </NavItem></div>
        </Header>
      <nav className="navtabs">
        <ul className="navtabs-routes">
          <Link className = {null}>The Hub</Link>
          <p>|</p>
          <Link to='/LandingPage'>Home</Link>
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
  <small><Link to="/AboutUs">About</Link> </small>
  <small> {'>'} </small>
  <small><b>About Tasweiq</b> </small>
  </div>
      </div>
      <div className="AboutT-section">
        <div className="AboutSidebar">
          <h2><b>About Us</b></h2>
          <ul className="sideList">
          <Link to = "/AboutUs"><b><small>About Tasweiq</small></b></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
    <Link to = "/AboutUs/WhatWeDo"><small>What We Do</small></Link>
    <Link to = "/AboutUs/CEOMessage"><small>CEO Message</small></Link>
    <Link to = "/AboutUs/OurConsultants"><small>Our Consultants</small></Link>
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
          <h1>About Tasweiq</h1>
          {/* <img className="pplAbout" src={image1}/> */}
          <ReactPlayer
            className='react-player'
            url= {video}
            width='777px'
            height='460px'
            config={{ file: {
              attributes: {
                controlsList: 'nodownload'
              }
            }}}
            controls = {true}

            />
          <p className="vhp">
            Tasweiq is an eCommerce disruptor and a marketplace for all things
            marketing related. The company offers the purchase of
            traditional/digital advertising, hardware requirements and in-depth
            analytics all from the touch of your phone using automated AI and
            GIS systems. The predictive intelligence allows for people who are
            not marketing savvy to advertise their product and/or service
            efficiently as the backend of the platform uses algorithms based on
            big data to source strategic touch points. The four main areas of
            acquired data are: Online Advertising Data, Traditional Advertising
            Data, Production Data, and Hardware Inventory.{" "}
          </p>
          <p className="vhp">
            Therefore, Tasweiq is a robust Tech company with a website/app that
            helps to connect merchants across the globe in over 100 countries
            (advertising spots owners e.g. billboards, magazines) with companies
            in the MENA region instantaneously. It will provide users with real
            time analytics to make viable and responsible decisions when dealing
            with their sizable budgets and the ability to procure hardware for
            quality production.”
          </p>
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





export default AboutUs;
