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
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import image1 from "../Pictures/AboutUs/Attachment1.jpg";
import BreadCrumbComp from "../components/BreadCrumbComp"
import email1 from "../Pictures/AboutUs/email1.png";
import phone from "../Pictures/AboutUs/phone1.png";
import form from "../Pictures/AboutUs/form.png";
import check from "../Pictures/LandingPage/check.png";
import Attachment4 from "../Pictures/AboutUs/Attachment4.jpg"
import { CartContext, OpenContext } from "../components/CartContext";

const sidebar = [
    "About Tasweiq",
    "Vision and Mission",
    "Core Values",
    "What We Do",
    "CEO Message",
    "Our Consultants",
  ];


function VisionAndMission() {
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
          <p>|</p>
          {LinkTabs('hardware', null)}
          <p>|</p>
          <a href= 'https://www.tasweiq.com/partners'>Sell Ads</a>
          <p>|</p>
          {LinkTabs('careers',null)}
          
          {LinkTabs('aboutus','ntrActive' )}
          
          {LinkTabs('help', null)}
          </ul>
      </nav></div>
        <div className ="TopCrumb">
        <div className="TopCrumb-content">
  <small><Link to="/LandingPage">Home</Link> </small>
  <small> {'>'} </small>
  <small><Link to="/AboutUs">About</Link> </small>
  <small> {'>'} </small>
  <small><b>What We Do</b> </small>
  </div>
      </div>
        <div className="AboutT-section">
          <div className="AboutSidebar">
            <h2><b>About Us</b></h2>
            <ul className="sideList">
          <Link to = "/AboutUs"><small>About Tasweiq</small></Link>
    <Link to = "/AboutUs/VisionAndMission"><small>Vision and Mission</small></Link>
    <Link to = "/AboutUs/CoreValues"><small>Core Values</small></Link>
    <Link to = "/AboutUs/WhatWeDo"><b><small>What We Do</small></b></Link>
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
            <h1>What We Do</h1>
            <p className="vhp">
            We know every client’s needs are different and so are the marketing solutions and media buying
campaigns that Tasweiq develops. From arts and cultural organizations to automotive, retail, legal, healthcare, and financial services, we don’t do cookie-cutter advertising, we do great marketing that is as unique
as our clients.
            </p>
            <p className="vhp">
            Tasweiq is not your typical advertising agency or media buying service. We’re different. We understand the
complexities of today’s marketing and the ever-changing digital world in which we live. Gone are the days
where you could easily reach your target demographic by running a print ad in your local paper, or spots on
radio or television. Sure, there’s still a place for traditional media and we’re good at it. Today’s business
needs to utilize all forms of media in order to reach today’s consumer. 
            </p>
            <p className="vhp">
            Digital has changed how we buy, how we live, how we communicate. We incorporate cutting edge
technology, marketing strategies and machine learning in order to develop the most effective campaigns
that deliver results. We’re not afraid to delve into the marketing waters to find new and unique ideas for our
clients or to push the envelope whilst displaying analytical feedback to empower clients to make
responsible and viable decisions. You know your business inside and out, so we can make the best
recommendations and formulate the right options to meet your goals and objectives. Our platforms
responsiveness to our clients’ needs and experience in media buying, digital, advertising and marketing is
what has makes Tasweiq one of the top most sought out platforms in the MENA region.
            </p>
            <p className="vhp">
            Whether your goals are lofty and your budget is limited, or your awareness campaign is global and money
isn’t an object, our platform caters to your goals, develop a media plan and strategy, and then put that plan
into action by automating the entire process. We’ve streamlined the payment process so you only have one
source of payment that needs to be managed with price points than are better than the competition. Look
out for our offers and make use of the full range of our displayed offerings.
            </p>
            <p className="vhp"><b>Media Includes:</b></p>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Digital
            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Social Media            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Television            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Radio            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Outdoor            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Print            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Direct Mail            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Theater            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Out-of-home            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Influencers            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Website {' '+'&'+' '} Logo Development            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Promotional Items            </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Hardware            </p>
            </div>
            <img className="pplAbout" src={Attachment4}/>
            <p className="vhp"><b>Tech That Counts</b></p>
            <p className="vhp">
            At Tasweiq, you’re not placing your media placement in the hands of an inexperienced media buying agent with limited knowledge and experience. Instead, you work with artificial intelligence and
machine learning algorithms that have been designed by the best in the business with a trusted
track record and vast tech, media and digital experience.
            </p>
            <p className="vhp">
            Tasweiq has pre-negotiated the best rates for our clients. That’s what you should expect. But, we
do more. Our platform has the marketing knowledge and expertise in knowing which advertising
and marketing vehicles make the most sense for your business and look for unique value-added
opportunities that stretch your budget and maximize results. Our media clients are as unique and
diverse as their individual marketing needs. Every marketing and advertising campaign our platform develops for our clients is designed and executed with just one goal in mind: to get results!
            </p>
            <p className="vhp"><b>Our Services</b></p>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Media Buying           </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Digital Marketing           </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Creative Services           </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Hardware {'&'} Electronics Purchase           </p>
            </div>
            <div className="vmp">
            <div className="check-container">
            <img className="check-text" src={check}/>
            </div>
            <p>
            Consulting           </p>
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

  export default VisionAndMission;