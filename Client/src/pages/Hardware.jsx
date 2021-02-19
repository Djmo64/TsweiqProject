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
import { CardComponent14, CardComponent15, CardComponent16, CardComponent17, CardComponent18, CardComponent19, CardComponent20, CardComponent21, CardComponent22, CardComponent23, CardComponent24, CardComponent25 } from "../components/CardComponent";
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

function Hardware() {
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
          <p>|</p>
          {LinkTabs('production', null)}
          
          {LinkTabs('hardware', 'ntrActive')}
          
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
          <Link to='/AllCategories/Hardware/CameraAndLenses' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic1.jpg")}/>
            <h2>{"Camera & Lenses"}</h2>
          </Link>
          <Link to='/AllCategories/Hardware/AcousticFoam' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic2.jpg")}/>
            <h2>{"Acoustic Foam"}</h2>
          </Link>
          <Link to='/AllCategories/Hardware/MusicAndEquipment' className='allcatoption'>
            <div />
            <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic3.jpg")}/>
            <h2>{"Music Equipment"}</h2>
          </Link>
          
      </div>
      <div className='allcatrow1'>
      <Link to='/AllCategories/Hardware/BackgroundScreen' className='allcatoption'>
      <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic4.jpg")}/>
            <h2>Background Screen</h2>
          </Link>
          <Link to='/AllCategories/Hardware/Cables' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic5.jpg")}/>
            <h2>Cables</h2>
          </Link>
          <Link to='/AllCategories/Hardware/ComputersAndLaptops' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic6.jpg")}/>
            <h2>{"Computers & Laptops"}</h2>
          </Link>

      </div>
      <div className='allcatrow1'>
      <Link to='/AllCategories/Hardware/HeadPhones' className='allcatoption'>
      <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic7.jpg")}/>
            <h2>Headphones</h2>
          </Link>
          <Link to='/AllCategories/Hardware/Lighting' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic8.jpg")}/>
            <h2>Lighting</h2>
          </Link>
          <Link to='/AllCategories/Hardware/MicrophoneStandsAndFilters' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic9.jpg")}/>
            <h2>{"Microphone, Stands & Filters"}</h2>
          </Link>

      </div>
      <div className='allcatrow1'>
      <Link to='/AllCategories/Hardware/Software' className='allcatoption'>
      <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic10.jpg")}/>
            <h2>Software</h2>
          </Link>
          <Link to='/AllCategories/Hardware/Speakers' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic11.jpg")}/>
            <h2>Speakers</h2>
          </Link>
          <Link to='/AllCategories/Hardware/Workstation' className='allcatoption'>
          <img className='imgcat' src={require("../Pictures/Hardware/sub-icon/pic12.jpg")}/>
            <h2>Workstation</h2>
          </Link>

      </div>
      
    </div>

        {/* <div className ="TopCrumb">
          <div className="TopCrumb-content2">
          <Link to = "/AllCategories"><small>All Categories</small></Link>
          <Link to = "/AllCategories/TVAdvertising"><small>TV</small></Link>
      <Link to = "/AllCategories/Cinema"><small>Cinema</small></Link>
      <Link to = "/AllCategories/Radio"><small>Radio</small></Link>
      <Link to = "/AllCategories/Print"><small>Print</small></Link>
      <Link to = "/AllCategories/OutOfHome"><small>Out of Home</small></Link>
      <Link to = "/AllCategories/Digital"><small>Digital</small></Link>
      <Link to = "/AllCategories/Production"><small>Tasweiq Instant Production</small></Link>
      <Link to = "/AllCategories/Production"><b><small>Hardware</small></b></Link>
      </div>
    </div> */}
    
    {/* <div className={classes.root}>
      <AppBar position="static">
        <Tabs className="productionTabs" 
        variant="fullWidth"
        scrollButtons="auto"
        indicatorColor='#f44336'
        value={value} onChange={handleChange}  aria-label="simple tabs example">
          <Tab label={"Camera & Lenses"} {...a11yProps(0)} />
          <Tab label={"Acoustic Foam"} {...a11yProps(1)} />
          <Tab label={"Music Equipment"} {...a11yProps(2)} />
          <Tab label="Background Screen" {...a11yProps(3)} />
          <Tab label="Cables" {...a11yProps(4)} />
          <Tab label={"Computers & Laptops"} {...a11yProps(5)} />
          <Tab label={"Headphones"} {...a11yProps(6)} />
          <Tab label={"Lighting"} {...a11yProps(7)} />
          <Tab label={"Microphone, Stands & Filters"} {...a11yProps(8)} />
          <Tab label={"Software"} {...a11yProps(9)} />
          <Tab label={"Speakers"} {...a11yProps(10)} />
          <Tab label={"Workstation"} {...a11yProps(11)} />
          
          
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
          
          
            
            </div>
          
          
          
  
          <div className="separator" />
          <div className="cardContainer">
          
          <CardComponent14/>
          
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
      <TabPanel className='tabpanel' value={value} index={1}>
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
          
          <CardComponent15/>
          
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
          
           <CardComponent16/>
          
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
          
           <CardComponent17/>
          
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
          
           <CardComponent18/>
          
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
          
          <CardComponent19/>
          
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
          
          <CardComponent20/>
          
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
          <div className="cardContainer">
          
           <CardComponent21/>
          
          </div>
          
         
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
          
           <CardComponent22/>
          
          </div>
          
        
        </div>
      </TabPanel>
      <TabPanel value={value} index={9}>
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
          
           <CardComponent23/>
          
          </div>
          
          
        </div>
      </TabPanel>
      <TabPanel value={value} index={10}>
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
          
           <CardComponent24/>
          
          </div>
          
         
        </div>
      </TabPanel>
      <TabPanel value={value} index={11}>
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
          
           <CardComponent25/>
          
          </div>
          
         
        </div>
      </TabPanel>
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

  export default Hardware;