import React, { useState } from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,} from "react-router-dom";
import { Header,Footer,DropdownMenu, LinkTabs,NavItem,DropdownCat, DropdownMenu2 } from "../pages/LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import { CardComponent2 } from "../components/CardComponent";
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
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
      };
    
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));

 

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }

function Digital() {
    const [cart, setCart] = useContext(CartContext);
    const [notHidden,sethidden] = useState(true)
    const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
    const [value, setValue] = useState(0);
    const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
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
        
    {/* <div className={classes.root}>
      <AppBar position="static">
        <Tabs className="productionTabs" 
        variant="fullWidth"
        scrollButtons="auto"
        indicatorColor='#f44336'
        value={value} onChange={handleChange}  aria-label="simple tabs example">
          <Tab label="Social Media Management" {...a11yProps(0)} />
          <Tab label={"SEO/SEM Management"} {...a11yProps(1)} />
          <Tab label={"  Email Marketing"} {...a11yProps(2)} />
          <Tab label="Mobile Marketing" {...a11yProps(3)} />
          <Tab label=" Instagram Advertising" {...a11yProps(4)} />
          <Tab label=" Facebook Advertising" {...a11yProps(5)} />
          <Tab label={"YouTube Advertising"} {...a11yProps(6)} />
          <Tab label={"LinkedIn Advertising"} {...a11yProps(7)} />
          <Tab label="Twitter Advertising" {...a11yProps(8)} />
          <Tab label={"Music Platforms"} {...a11yProps(9)} />
          
          
        </Tabs>
      </AppBar>
       </div> */}
       <div className="AboutT-section">
    
        
        
          <div className='allcatfullcontainer'>
            <div className='allcatrow1'>
                <Link to="/AllCategories/Digital/SocialMediaManagement"  className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/SocialMediaManagement.png")}/>
                  <h2>Social Media Management</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/SEM-SEO.png")}/>
                  <h2>SEO/SEM Management</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/Digital/EmailMarketing.png")}/>
                  <h2>Email Marketing</h2>
                </Link>
            </div>
            <div className='allcatrow1'>
            <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/Digital/MobileMarketing.png")}/>
                  <h2>Mobile Marketing</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/InstagramMarketing.png")}/>
                  <h2>Instagram Advertising</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/FacebookAd.png")}/>
                  <h2>Facebook Advertising</h2>
                </Link>

            </div>
            <div className='allcatrow1'>
            <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/Digital/YouTubeAdvertising.png")}/>
                  <h2>YouTube Advertising</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/LinkedinMarketing.png")}/>
                  <h2>LinkedIn Advertising</h2>
                </Link>
                <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/Digital/TwitterMarketing.png")}/>
                  <h2>Twitter Advertising</h2>
                </Link>

            </div>
            <div className='allcatrow2'>
            <Link to="/AllCategories/Digital/SocialMediaManagement" className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/Digital/MusicPlatformMarketing.png")}/>
                  <h2>Music Platforms</h2>
                </Link>
            </div>
            
          </div>

        {/* <div className="cardContainer2">
        <CardComponent/>
        </div> */}


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

  export default Digital;