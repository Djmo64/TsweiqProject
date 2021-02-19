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
  NavItem,LinkTabs,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import {CardComponent} from '../components/CardComponent';
import ContactForm from '../components/ContactForm';
import { CartContext, OpenContext } from "../components/CartContext";


function AllCategories(){
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
          
          {LinkTabs('buyads','ntrActive')}
          
          {LinkTabs('production', null )}
          <p>|</p>
          {LinkTabs('hardware', null)}
          <p>|</p>
          <a href= 'https://www.tasweiq.com/partners'>Sell Ads</a>
          <p>|</p>
          {LinkTabs('careers',null)}
          <p>|</p>
          {LinkTabs('aboutus', null)}
          <p>|</p>
          {LinkTabs('help', null)}
          </ul>
      </nav></div>
     
      <div className="AboutT-section">
    
        
        
          <div className='allcatfullcontainer'>
            <div className='allcatrow1'>
                <Link to='AllCategories/TVAdvertising' className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/AllCat/Icon1.png")}/>
                  <h2>TV</h2>
                </Link>
                <Link to='AllCategories/Cinema' className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/AllCat/Icon5.png")}/>
                  <h2>Cinema</h2>
                </Link>
                <Link to='AllCategories/Radio' className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/AllCat/Icon2.png")}/>
                  <h2>Radio</h2>
                </Link>
            </div>
            <div className='allcatrow1'>
            <Link to='AllCategories/Print' className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/AllCat/Icon3.png")}/>
                  <h2>Print</h2>
                </Link>
                <Link to='AllCategories/OutOfHome' className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/AllCat/Icon4.png")}/>
                  <h2>Out of Home</h2>
                </Link>
                <Link to='AllCategories/Digital' className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/AllCat/Icon6.png")}/>
                  <h2>Digital</h2>
                </Link>

            </div>
            
          </div>

        {/* <div className="cardContainer2">
        <CardComponent/>
        </div> */}


        </div>
        {/* <div className="section7-1">
          <div className="section7-container">
            <div className="section7-becomepartner">
              <div className="overlay">
                <div className="overlay-text">
                  <h1>Become a Partner</h1>
                  <p>
                    Want to be part of our amazing merchants on our platform?
                    Simply just fill the details on the right and we will get
                    back to you within 24 hours.
                  </p>
                </div>
              </div>
            </div>
            <div className="section7-contactform">
              <ContactForm />
            </div>
          </div>
        </div> */}
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

export default AllCategories;