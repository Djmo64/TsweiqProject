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
  LinkTabs,
  DropdownMenu,
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
import Attachment8 from "../Pictures/Career/Attachment8.jpg";
import { CartContext, OpenContext } from "../components/CartContext";



function WhyWorkWithUs () {
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
  <small><b>Why Work With Us</b> </small>
  </div>
      </div>
      <div className="AboutT-section">
        <div className="AboutSidebar">
          <h2><b>Career</b></h2>
          <ul className="sideList">
          <Link to = "/Career"><small>Overview</small></Link>
    <Link to = "/Career/WhyWorkWithUs"><b><small>Why Work With Us</small></b></Link>
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
          <h1>Why Work With Us</h1>
          
          <p className="vhp"><b>A Career, not merely a job</b></p>
          <p className="vhp">
          We offer you a career and not merely a job. A career where you have an opportunity to learn, explore,
perform, and realize your potential. It is all about fulfilling your career aspirations in a challenging and
enjoyable environment.
          </p>
          <p className="vhp"><b>Performance Culture</b></p>
          <p className="vhp">
          We are a performance driven company and we value results. We take care to engage and enable you to
deliver your best. We have implemented a variety of methods to ensure that our employees and supported
and to drive performance, growth and improvement.
          </p>
          <p className="vhp">
          Recognizing performance and contribution is a continuous process and is formally conducted several times
throughout the year.
          </p>
          <img className="pplAbout" src={Attachment8}/>
          <p className="vhp"><b>Total Rewards {'&'} Growth Opportunities</b></p>
          <p className="vhp">
          Our total rewards program is designed to compete with the best in the industry. We offer you an attractive
salary, allowance, and benefits include club membership reimbursement, medical cover for self and family,
and air tickets. Bonuses {'&'} incentives are performance based for all employee groups.
          </p>
          <p className="vhp">
          Growth opportunities, learning, and skill development opportunities are available through several channels;
promotions, transfer to other roles, project based assignment, formal training programs, participation in
seminar, conferences etc.
          </p>
          <p className="vhp"><b>What do we expect from you?</b></p>
          <p className="vhp">
          Leadership, working in teams, taking ownership, and genuine involvement in developing others are some
qualities we respect. If you believe in our core values then you fulfill some of the key criteria to be considered for a career opportunity with Tasweiq.
          </p>
          <p className="vhp"><b>Our Selection Process:</b></p>
          <dl>
          <dt className="vhp">
          Our selection process is multi-staged and may include:
          </dt>
          <dd className="vhp">
          - Written test (for administrative positions and medical authorization)
          </dd>
          <dd className="vhp">
          - A minimum of two rounds of personal interviews
          </dd>
          <dd className="vhp">
          - Presentation to senior management team
          </dd>
          <dd className="vhp">
          - Offer discussion and finalization
          </dd>
          <p className="vhp">
          We encourage fresh graduates and experienced UAE Nationals to apply for career opportunities with us.
          </p>

          </dl>

          <div className="Career-info">
              <h3>To view current job openings, please click below:</h3>
              <button>Click Here</button>
               </div> 
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

export default WhyWorkWithUs;