import React, { useState } from "react";
import {BrowserRouter as Router,Route,Switch,Link,Redirect,} from "react-router-dom";
import { Header,Footer,DropdownMenu,NavItem,LinkTabs,DropdownCat, DropdownMenu2 } from "../pages/LandingPage";
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
    selected:{
      backgroundColor: "orange",
      
    },
   secondary:{
     color:"#f44336"
     
   }
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

function Production() {
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
          <p>|</p>
          {LinkTabs('buyads',null)}
          
          {LinkTabs('production','ntrActive' )}
          
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
      <Link to = "/AllCategories/Radio"><small>Radio</small></Link>
      <Link to = "/AllCategories/Print"><small>Print</small></Link>
      <Link to = "/AllCategories/OutOfHome"><small>Out of Home</small></Link>
      <Link to = "/AllCategories/Digital"><small>Digital</small></Link>
      <Link to = "/AllCategories/Production"><b><small>Tasweiq Instant Production</small></b></Link>
      <Link to = "/AllCategories/Hardware"><small>Hardware</small></Link>
      </div>
    </div> */}

    <div className="AboutT-section">
    
        
        
          <div className='allcatfullcontainer'>
            <div className='allcatrow1'>
                <Link to='/AllCategories/Production/VoiceOvers'  className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/TIP/VoiceOverIcon.png")}/>
                  <h2>Voice Overs</h2>
                </Link>
                
                <Link to='/Allcategories/Production/PromotionalItems'  className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/TIP/PromotionalItemIcon.png")}/>
                  <h2>Promotional Items</h2>
                </Link>
                <Link to='/Allcategories/Production/VideoAnimation'  className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/TIP/VideoAnimationIcon.png")}/>
                  <h2>{" Video & Animation"}</h2>
                </Link>
            </div>
            <div className='allcatrow1'>
            <Link to="/AllCategories/Production/AdDesignArtwork"  className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/TIP/GraphicDesignArtworkIcon.png")}/>
                  <h2>{"Ad Design & Artwork"}</h2>
                </Link>
                <Link to='/AllCategories/Production/LogoDesignCollateral' className='allcatoption'>
                <img className='imgcat' src={require("../Pictures/TIP/LogoCollateralIcon.png")}/>
                  <h2>{"Logo Design & Collateral"}</h2>
                </Link>
                <Link to='/AllCategories/Production/AppWebsiteDesign'  className='allcatoption'>
                  <div />
                  <img className='imgcat' src={require("../Pictures/TIP/AppWebsiteDesignIcon.png")}/>
                  <h2>{" App & Website Design"}</h2>
                </Link>
              
            </div>
            
            <div className='allcatrow2'>
            <Link to="/AllCategories/Production/ContentScriptWriting"  className='allcatoption'>
            <img className='imgcat' src={require("../Pictures/TIP/ContentScriptWritingIcon.png")}/>
                  <h2>{"Content & Script Writing"}</h2>
                </Link>
            </div>
          </div>

        {/* <div className="cardContainer2">
        <CardComponent/>
        </div> */}


        </div>
    
    {/* <div className={classes.root}>
      <AppBar position="static">
        <Tabs indicatorColor='#f44336'  className="productionTabs" 
        variant="fullWidth"
        scrollButtons="auto"
        value={value} onChange={handleChange}  aria-label="simple tabs example">
          <Tab  label="Voice Over" {...a11yProps(0)} />
          <Tab label={"Logo Design & Collateral"} {...a11yProps(1)} />
          <Tab label={" App & Website Design"} {...a11yProps(2)} />
          <Tab label={"Graphic Design & Artwork"} {...a11yProps(3)} />
          <Tab label="Promotional Items" {...a11yProps(4)} />
          <Tab label={" Video & Animation"} {...a11yProps(5)} />
          <Tab label={"Content & Script Writing"} {...a11yProps(7)} />
          
          
          
          
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            <h3>
              <b>Voice</b>
            </h3>
            <ul className="sideList">
              <GenderFilter/>
            </ul>
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           <CardComponent7/>
          
          </div> */}
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
        {/* </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
            
          
  
          <div className="separator" />
          <div className="cardContainer">
          <CardComponent8/>
           
          
          </div>
         
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           <CardComponent10/>
          
          </div>
          
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           <CardComponent9/>
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
           <CardComponent11/>
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
          <CardComponent12/>
          
          </div>
          
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={6}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
          
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
          <CardComponent13/>
          
          </div>
          
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={7}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
          
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer"> */}
          
           {/* //card comp for voices */}
          
          {/* </div>
         
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={8}>
      <div className="AboutT-section2">
          <div className="AboutSidebar2">
            <h3>
              <b>Language</b>
            </h3>
            <ul className="sideList">
              <LangFilter />
            </ul>
          
          
           
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
          
          
          </div>
          
         
        </div>
      </TabPanel>
      
    </div> */}
       
        
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

  export default Production;