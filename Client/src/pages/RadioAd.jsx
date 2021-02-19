import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import NotFoundPage from "./NotFound";
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
} from "./LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"

import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import { CardComponent3 } from "../components/CardComponent";
import ContactForm from "../components/ContactForm";
import CountryFilter from "../components/CountryFilter";
import {BrandFilter} from "../components/BrandFilter";
import TimeFilter from "../components/TimeFilter";
import RadioAd from "../RadioAd.json";
import Dropdown from 'react-bootstrap/Dropdown';
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { LangFilter, StationFilters } from "../components/OtherFilters";
import {useState} from "react"

function RadioAds() {
  const [cart, setCart] = useContext(CartContext);
  const [notHidden,sethidden] = useState(true)
  const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );

  const toHide = () => {
    sethidden(false)
  }
  const Unhidden = () => {
    sethidden(true)
  }
  const RemoveFromCart = (index) =>{
    var newCart = cart;
    newCart.splice(index,1);
    setCart([...newCart])
    console.log(newCart)
    console.log(cart)
}
  

  const cartprev = cart.map((crtp,index) => {
    return <div className="itemPadding">
      <img src={require("../Pictures/"+ crtp.Sec+ "/" + crtp.Image + ".png")}/>
        <small>{crtp.Title}</small>
        <span onClick={()=> RemoveFromCart(index)}>x</span>
      </div>
    
  })
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
          
          {LinkTabs('production', null)}
          <p>|</p>
          {LinkTabs('hardware',null )}
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
      {/* <div className ="TopCrumb">
        <div className="TopCrumb-content2">
        <Link to = "/AllCategories"><small>All Categories</small></Link>
        <Link to = "/AllCategories/TVAdvertising"><small>TV</small></Link>
    <Link to = "/AllCategories/Cinema"><small>Cinema</small></Link>
    <Link to = "/AllCategories/Radio"><b><small>Radio</small></b></Link>
    <Link to = "/AllCategories/Print"><small>Print</small></Link>
    <Link to = "/AllCategories/OutOfHome"><small>Out of Home</small></Link>
    <Link to = "/AllCategories/Digital"><small>Digital</small></Link>
    <Link to = "/AllCategories/Production"><small>Tasweiq Instant Production</small></Link>
    <Link to = "/AllCategories/Hardware"><small>Hardware</small></Link>
    </div>
  </div> */}
  <div className ="TopCrumb">
        <div className="TopCrumb-content3">
        <small>{RadioAd.length} </small>
        <small>of</small>
        <small>{RadioAd.length}</small>
        <small>Results</small>
    </div>
    <Dropdown className= 'card-dropdown2'>
  <Dropdown.Toggle className="sortby" variant="success" id="dropdown-basic">
    <p>Sort By:</p><p>▼</p>
  </Dropdown.Toggle>
  <Dropdown.Menu className= 'DDitem-display'>
    <Dropdown.Item href="#">Recommended</Dropdown.Item>
    <Dropdown.Item href="#">Price – Low to High</Dropdown.Item>
    <Dropdown.Item href="#">Price – High to Low</Dropdown.Item>
    <Dropdown.Item href="#">Cost per Mile (CPM)</Dropdown.Item>
   
  </Dropdown.Menu>
</Dropdown>
  </div>
  
     
      <div className="AboutT-section">
        <div className="AboutSidebar2">
          <h3>
            <b>Countries</b>
          </h3>
          <ul className="sideList">
            <CountryFilter />
          </ul>
          <div>
          <h3>
            <b>Language</b>
          </h3>
          <ul className="sideList">
            <LangFilter/>
          </ul>
          </div>
          <div>
              <h3>Average Customer Review</h3>
              <ul>
                  <div className='starSection'>
              <ReactStars edit= {false}
    count= {5}
    value={1}
    size={24}
    activeColor="#ffd700"
  /><span>{'& Up'}</span> </div>
  <div className='starSection'>
  <ReactStars edit= {false}
    count= {5}
    value={2}
    size={24}
    activeColor="#ffd700"
  /> <span>{'& Up'}</span> </div>
  <div className='starSection'>
  <ReactStars edit= {false}
    count= {5}
    value={3}
    size={24}
    activeColor="#ffd700"
  /> <span>{'& Up'}</span></div>
  <div className='starSection'>
  <ReactStars edit= {false}
    count= {5}
    value={4}
    size={24}
    activeColor="#ffd700"
  /> <span>{'& Up'}</span></div>
  <div className='starSection'>
  <ReactStars edit= {false}
    count= {5}
    value={5}
    size={24}
    activeColor="#ffd700"
  /> <span>{'& Up'}</span></div>
              </ul>
          </div>

        <ul className="sideList">
            
          </ul>
<div>
  <h3>Price</h3>
  <ul>
    <p> {'> Any Price'}</p>
    <p>Up to 500 AED</p>
    <p>500 to 1000 AED</p>
    <p>1000 to 3000 AED</p>
    <p>3000 to 7000 AED</p>
    <p>7000 AED and more</p>
  </ul>
  <div className='priceFilter'>
  <input type='text' placeholder='AED Min'/>
  <input type='text' placeholder='AED 4990'/>
  <button>GO</button>
</div>
</div>
<h3>Time Slot</h3>
        <ul className="sideList">
            <TimeFilter />
          </ul>


        </div>
        

        <div className="separator" />
        <div className="cardContainer">
          <CardComponent3 />
        </div>
        {/* {cartprev.length != 0 && notHidden == true ? 
          <div className='cartPrevContainer'>
            <div className='hidetab'>
              <button className='hidebtn' onClick={toHide}>Hide</button>
            </div>
            <h3 className="cartprevItems">Items({cartprev.length})</h3>
          <div className="cartPreview">
            
            {cartprev}
          </div>
          <p>subtotal: {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p>
            <button className="gotocartbtn"><Link to= "/Cart">Go to cart</Link></button>
          </div> : null}
          {cartprev.length !=0 && notHidden == false ? 
          <button className='showPrev' onClick={Unhidden}>{'◄'}</button> : null 
        } */}
      </div>
      <Footer />
    </div>
  );
}
const tabs = [
  "New!",
  "Production",
  "Hardware",
  "Analytics",
  "Sell",
  "Media",
  "Help",
];
const tabItems = tabs.map((tab) => (
  <Link
    to={"/" + tab.replace(/ /g, "")}
    className="tabIcons"
    onClick={() => console.log("/" + tab.replace(/ /g, ""))}
  >
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
              <Link to="/LandingPage">
                <h1>Tasweiq</h1>
              </Link>
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

export default RadioAds;