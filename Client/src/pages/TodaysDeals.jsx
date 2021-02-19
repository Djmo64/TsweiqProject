import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import { NavItem, DropdownCat,DropdownMenu2,LinkTabs, DropdownMenu,Header, Footer } from "./LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import {CardComponent} from '../components/CardComponent';
import ContactForm from '../components/ContactForm';
import { AutoComplete } from "antd";


function TodaysDeals(){
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
      <div className ="TopCrumb">
        <div className="TopCrumb-content3">
        <small>Home </small>
    <small>{'>'}</small>
        <small>Today's Deals</small>
    </div>
    </div>
      <div className="Tdeals">
      <div className="DealsSidebar">
        <h1>Today's Deals</h1>
        <div className='pagelinkside'>
        <p><PageLink className="TD-O" activeClass="active" to="TD1" spy={true} smooth={true} offset={0} duration={100}>Government 72 Hour Package</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD2" spy={true} smooth={true} offset={0} duration={100}>The F{'&'}B Experience</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD3" spy={true} smooth={true} offset={0} duration={100}>The Digital Pack</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD4" spy={true} smooth={true} offset={0} duration={100}>For Personal Trainers</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD5" spy={true} smooth={true} offset={0} duration={100}>The Airlines Package</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD6" spy={true} smooth={true} offset={0} duration={100}>Telecommunications</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD7" spy={true} smooth={true} offset={0} duration={100}>The Real Estate Experience</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD8" spy={true} smooth={true} offset={0} duration={100}> The MediCare Package</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD9" spy={true} smooth={true} offset={0} duration={100}>The Automotive Industry</PageLink></p>
        <p><PageLink className="TD-O" activeClass="active" to="TD10" spy={true} smooth={true} offset={0} duration={100}>Startup Experience</PageLink></p>
</div>
        
      </div>
      <div className="Dealscontent">
        <div  className="pac">
          <h2 id="TD1">Government 72 Hour Package</h2>
          <div className="pac-content">
            <div className="pac-img">
                <img src={require("../Pictures/TDs/TD1.png")}/>
            </div>
            <div className="pac-info">
              <h3>Marketing Strategy</h3>
              <h3>Content Development</h3>
              <h3>Creative</h3>
              <h3>30 Second TV Commercial</h3>
              <h3>30 Second Digital Commercial</h3>
              <h3>Radio Voice Over</h3>
              <h3>Print Artwork</h3>
              <h3>Out of Home Artwork</h3>
              <h3>Public Transport Artwork</h3>
              <h3>Digital Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – Radio</h3>
              <h3>1 Month – Public Transport</h3>
              <h3>1 Month – Print Media</h3>
              <h3>1 Month – Cinema</h3>
              <h3>1 Month – Malls</h3>
              <h3>1 Month – YouTube</h3>
              <h3>12 Month Media Buying – SEO/SEM</h3>
              <h3>1 Month Media Buying – Influencer</h3>
              <h3>12 Month – Social Media Management</h3>
              <small>*This package will create and shoot and place each element within 72 hours
using a dedicated creative team.</small>
                <div className="pac-btn">
                  <h3><b>Total: 1,760,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD2">The F{'&'}B Experience</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD2.png")}/>
            </div>
            <div className="pac-info">
              <h3>30 Second Digital Commercial</h3>
              <h3>Radio Voice Over Commercial</h3>
              <h3>Print Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying - Radio</h3>
              <h3>1 Month Media Buying – Out of Home</h3>
              <h3>1 Month Media Buying - Print</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Social Media Advertising</h3>
              <small></small>
              <div className="pac-btn">
              <h3><b>Total: 130,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD3">The Digital Pack</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD3.png")}/>
            </div>
            <div className="pac-info">
              <h3> Digital Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Linkedin</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>1 Month Media Buying – Snapchat</h3>
              <h3>12 Month Media Buying – SEO/SEM</h3>
              <h3>12 Month Media Buying – Social Media Management</h3>
              <small></small>
              <div className="pac-btn">
              <h3><b>Total: 75,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD4">For Personal Trainers</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD4.png")}/>
            </div>
            <div className="pac-info">
              <h3>Digital 30 Second Commercial</h3>
              <h3>Digital Artwork</h3>
              <h3>Database Creation</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying - Instagram</h3>
              <h3>1 Month Media Buying - Print</h3>
              <h3>1 Month Media Buying - Message</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <small></small>
              <div className="pac-btn">
              <h3><b>Total: 38,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>
            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD5">The Airlines Package</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD5.png")}/>
            </div>
            <div className="pac-info">
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – Print</h3>
              <h3>1 Month Media Buying – Public Transport</h3>
              <h3>1 Month Media Buying – TV</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Linkedin</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>1 Month Media Buying – Snapchat</h3>
              <small>*The above assumes that each Airline already has a 30 second commercial
ready for placement.</small>
<div className="pac-btn">
<h3><b>Total: 205,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD6">Telecommunications</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD6.png")}/>
            </div>
            <div className="pac-info">
              <h3>Media Planning Strategy</h3>
              <h3>Digital Artwork</h3>
              <h3>Out of Home Artwork</h3>
              <h3>Radio Voice Over</h3>
              <h3>1 Month Media Buying – Billboard</h3>
              <h3>1 Month Media Buying – Radio</h3>
              <h3>1 Month Media Buying – TV</h3>
              <h3>1 Month Media Buying – Cinema</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>1 Month Media Buying – Snapchat</h3>
              <small>*The above assumes that each Telecoms provider already has a 30 second
commercial ready for placement.</small>
<div className="pac-btn">
<h3><b>Total: 406,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD7">The Real Estate Experience</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD7.png")}/>
            </div>
            <div className="pac-info">
              <h3>Digital Commercial – Drone Technology</h3>
              <h3>Digital Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>12 Month Media Buying – SEO/SEM</h3>
              <h3>12 Month Media Buying – Social Media Management</h3>
              <small>*The above assumes that each estate provider already has a 30 second
commercial ready for placement.</small>
<div className="pac-btn">
<h3><b>Total: 110,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>

            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD8">The MediCare Package</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD8.png")}/>
            </div>
            <div className="pac-info">
              <h3>30 Second Digital Commercial</h3>
              <h3>Radio Voice Over Commercial</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – Radio</h3>
              <h3>12 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Linkedin</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>1 Month Media Buying – Snapchat</h3>
              <small>*The above assumes that each madicare provider already has a 30 second
commercial ready for placement.</small>
<div className="pac-btn">
<h3><b>Total: 205,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>
            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD9">The Automotive Industry</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD9.png")}/>
            </div>
            <div className="pac-info">
              <h3>Marketing Strategy</h3>
              <h3>Content Development</h3>
              <h3>Creative</h3>
              <h3>30 Second TV Commercial</h3>
              <h3>30 Second Digital Commercial</h3>
              <h3>Radio Voice Over</h3>
              <h3>Digital Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – Radio</h3>
              <h3>12 Month Media Buying – YouTube</h3>
              <h3>12 Month Media Buying – Facebook</h3>
              <h3>12 Month Media Buying – Instagram</h3>
              <h3>12 Month Media Buying – SEO/SEM</h3>
              <h3>2 Month Media Buying – Social Media Management</h3>
              <small>*This package will create and shoot and place each element within
72 hours using a dedicated creative team.</small>
<div className="pac-btn">
<h3><b>Total: 706,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>
            </div>

          </div>
        </div>
        <div className="pac">
          <h2 id= "TD10">The Startup Experience</h2>
          <div className="pac-content">
            <div className="pac-img">
            <img src={require("../Pictures/TDs/TD10.png")}/>
            </div>
            <div className="pac-info">
              <h3>Brand Guide</h3>
              <h3>10 Option Logo Design</h3>
              <h3>Unlimited Revisions</h3>
              <h3>Full Copyright Ownership</h3>
              <h3>Top Level Designers</h3>
              <h3>Business Cards</h3>
              <h3>Email Signature</h3>
              <h3>Letterhead</h3>
              <h3>Envelope</h3>
              <h3>Facebook Cover</h3>
              <h3>YouTube Banner</h3>
              <h3>Twitter Header</h3>
              <h3>LinkedIn Banner</h3>
              <h3>5 Options</h3>
              <h3>Unlimited Revisions</h3>
              <h3>Full Copyright Ownership</h3>
              <h3>Top Level Designers</h3>
              <h3>10 Options Web Page Designs</h3>
              <h3>Unlimited Revisions</h3>
              <h3>Fully Customized Designs (10-15 Pages)</h3>
              <h3>Web Friendly Files (e.g. Photoshop)</h3>
              <h3>Dedicated Manager</h3>
              <h3>Digital Artwork</h3>
              <h3>Media Planning Strategy</h3>
              <h3>1 Month Media Buying – YouTube</h3>
              <h3>1 Month Media Buying – Linkedin</h3>
              <h3>1 Month Media Buying – Facebook</h3>
              <h3>1 Month Media Buying – Instagram</h3>
              <h3>1 Month Media Buying – Snapchat</h3>
              <h3>12 Month Media Buying – SEO/SEM</h3>
              <h3>12 Month Media Buying – Social Media Management</h3>
              <small></small>
              <div className="pac-btn">
              <h3><b>Total: 706,000.00 AED</b></h3>
                  <button>Add to Cart</button>
                </div>
            </div>

          </div>
          </div>
        </div>
      </div>
      
      <Footer/>
        </div>
    );
  }

export default TodaysDeals;