import React, { useState } from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,} from "react-router-dom";
import { Header,Footer,DropdownMenu,NavItem,DropdownCat, DropdownMenu2, LinkTabs } from "../pages/LandingPage";
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
import { LangFilter } from "../components/OtherFilters";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {GenderFilter} from "../components/OtherFilters"
import Box from '@material-ui/core/Box';
import GDI from "../GDI.json"



export function AddesignArtwork(){
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
      <div className="topcrumb-div">
  <div className ="TopCrumb">
        <div className="TopCrumb-content3">
        <small>{GDI.length} </small>
        <small>of</small>
        <small>{GDI.length}</small>
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
{/* production */}
        <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Sub-Categories</b>
            </h3>
            <ul className="sideList">
              {/* subcat filter */}
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           <CardComponent9/>
          
          </div>
          
         
        </div>
        
        <Footer/>
        </div>
    )
}