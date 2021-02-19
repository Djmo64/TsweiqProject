import React, { useContext } from "react";
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

import WhyWorkWithUs from "../pages/WhyWorkWithUs";
import CurrentJobOpenings from "../pages/CurrentJobOpenings";

import Attachment7 from "../Pictures/Career/Attachment7.jpg";
import { CartContext, OpenContext } from "../components/CartContext";


const Career = () => {
    return (
        
        <Switch>
          <Route exact path="/Career" component={OverView} />
          <Route  path="/Career/WhyWorkWithUs" component={WhyWorkWithUs}/>
          <Route exact path="/Career/CurrentJobOpenings" component={CurrentJobOpenings} />
          <Route exact path="/LandingPage" component={LandingPage}/>
          
          <Route exact path="/NotFound" component={NotFoundPage} />
          <Redirect to="/LandingPage" />
        </Switch>
   
    );
  };

  function OverView  () {
    const [cart, setCart] = useContext(CartContext);
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
          
          {LinkTabs('careers','ntrActive')}
          
          {LinkTabs('aboutus', null)}
          <p>|</p>
          {LinkTabs('help', null)}
          </ul>
      </nav></div>
        <div className ="TopCrumb">
          <div className="TopCrumb-content">
    <small><Link to="/LandingPage">Home</Link> </small>
    <small> {'>'} </small>
    <small><Link to="/Career">Career</Link> </small>
    <small> {'>'} </small>
    <small><b>Overview</b> </small>
    </div>
        </div>
        <div className="AboutT-section">
          <div className="AboutSidebar">
            <h2><b>Career</b></h2>
            <ul className="sideList">
            <Link to = "/Career"><b><small>Overview</small></b></Link>
      <Link to = "/Career/WhyWorkWithUs"><small>Why Work With Us</small></Link>
      <Link to = "/Career/CurrentJobOpenings"><small>Current Job Openings</small></Link>
      
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
            <h1>Overview</h1>
            <img className="pplAbout" src={Attachment7}/>
            <p className="vhp"><b>Our People Philosophy</b></p>
            <p className="vhp">
            We believe our employees are the primary source of competitiveness. In order to translate our people
philosophy into a reality, becoming the “Employer of Choice” in the marketing industry has been adopted as
a key strategic pillar of our Modernization {'&'} Perpetual Excellence Plan.
            </p>
            <div className="Career-info">
                <h3>To be considered for future vacancies, please send your resume to:</h3>
                <button>recruitment@tasweiq.com</button>
            </div>
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
  



  export default Career;