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
import { CartContext, OpenContext, SubCatContext } from "../components/CartContext";


function PromotionalItems(){
  const [cart, setCart] = useContext(CartContext);
  const [SubCat,SetSubCat] = useContext(SubCatContext);

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
          
          {LinkTabs('production','ntrActive' )}
          
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
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(1)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/USB1.png")}/>
                  <h2>{"Chargers & Power Banks"}</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(2)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Pen1.png")}/>
                  <h2>Pens</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(3)} className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/Promo/Mask1.png")}/>
                  <h2>Face Masks </h2>
                </Link>
            </div>
            <div className='allcatrow1'>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(4)} className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/Promo/NP1.png")}/>
                  <h2>Notebooks </h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(5)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Speaker1.png")}/>
                  <h2>Speakers</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(6)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Mug1.png")}/>
                  <h2>Mugs</h2>
                </Link>

            </div>
            <div className='allcatrow1'>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(7)}  className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Cap1.png")}/>
                  <h2>Caps</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(8)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/TS1.png")}/>
                  <h2>T-shirts</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(9)} className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/Promo/Bag1.png")}/>
                  <h2>Bags</h2>
                </Link>
            </div>
            <div className='allcatrow1'>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(10)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Folder1.png")}/>
                  <h2>Folders</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(11)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Phone1.png")}/>
                  <h2>Mobile Covers</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(12)} className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/Promo/Flag1.png")}/>
                  <h2>Flags</h2>
                </Link>
            </div>
            <div className='allcatrow1'>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(13)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Stick1.png")}/>
                  <h2>Stickers</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(14)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/Stamp1.png")}/>
                  <h2>Company Stamps</h2>
                </Link>
                <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(15)} className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/Promo/BC1.png")}/>
                  <h2>Business Card Prints</h2>
                </Link>
            </div>
            <div className='allcatrow2'>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>SetSubCat(16)} className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Promo/SB1.png")}/>
                  <h2>Stress Balls</h2>
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

export default PromotionalItems;