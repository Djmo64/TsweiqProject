import React, { useState } from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,} from "react-router-dom";
import { Header,Footer,DropdownMenu,NavItem,DropdownCat, LinkTabs, DropdownMenu2 } from "../pages/LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { CardComponent10, CardComponent11, CardComponent12, CardComponent13, CardComponent2, CardComponent7, CardComponent8, CardComponent9 } from "../components/CardComponent";
import CountryFilter from "../components/CountryFilter";
import {BrandFilter} from "../components/BrandFilter";
import TimeFilter from "../components/TimeFilter";
import Dropdown from 'react-bootstrap/Dropdown'
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { LangFilter, SubFilter2 } from "../components/OtherFilters";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {GenderFilter} from "../components/OtherFilters"
import Box from '@material-ui/core/Box';
import VA from "../VA.json"



export function VideoAnimation(){
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
          
          {LinkTabs('production','ntrActive')}
          
          {LinkTabs('hardware', null )}
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
      <div className="topcrumb-div">
  <div className ="TopCrumb">
        <div className="TopCrumb-content3">
        <small>{VA.length} </small>
        <small>of</small>
        <small>{VA.length}</small>
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
  </div>

        <div className="AboutT-section2">
          <div className="AboutSidebar2">
          <div>
              <h3>Sub-Categories</h3>
              <SubFilter2/>
              
            </div>
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
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
  <input type='text' placeholder='AED max'/>
  <button>GO</button>
</div>
</div>
          
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
          <CardComponent12/>
          
          </div>
          
          
        </div>
        
        <Footer/>
        </div>
    )
}