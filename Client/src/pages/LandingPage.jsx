import React, { useContext, useState, useEffect, useRef } from "react";
import Modal from "react-modal";
import card1 from "../Pictures/LandingPage/todaysdeals.jpg";
import card2 from "../Pictures/LandingPage/shopbycategories2.jpg";
import card3 from "../Pictures/LandingPage/hardware2.jpg";
import card4 from "../Pictures/LandingPage/hardware3.jpg";
import card5 from "../Pictures/LandingPage/Digital.jpg";
import card6 from "../Pictures/LandingPage/Shopbyloc.jpg";
import useracc from "../Pictures/LandingPage/useracc.png"
import CartIcon  from "../icons/carticon.jpg";
import  User  from "../icons/pplcircle.svg";
import { ReactComponent as DownArdiv } from "../icons/down-arrow.svg";
import { ReactComponent as Search } from "../icons/search.svg";
import NotiCart from "../icons/NotiCart.svg";
import geo from "../icons/geo.svg";
import {SearchBox, ModalSearchBox} from "../components/SearchBox";
import icon1 from "../Pictures/LandingPage/USA.png";
import icon2 from "../Pictures/LandingPage/usd.png";
import icon3 from "../Pictures/LandingPage/lang.png";
import logo1 from "../Pictures/LandingPage/logobar1.jpg";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import ReactStars from "react-rating-stars-component";
import {NotiBell} from "../components/NotiBell";
import Carousel from 'react-elastic-carousel';

import { UserContext } from '../components/CartContext';
import {socialRank} from '../components/SocialRank'
import lottie from 'lottie-web';

import { ReactComponent as ComputerIcon } from "../icons/computer.svg";
import { ReactComponent as Location2Icon } from "../icons/location2.svg";
import { ReactComponent as MarketingIcon } from "../icons/digital-marketing.svg";
import { ReactComponent as Marketing2Icon } from "../icons/digital-marketing2.svg";
import AutoCompleteText from "../components/AutoCompleteText";
import {Link} from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
import SearchData from "../industries.json";
import Item from "antd/lib/list/Item";
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { CartContext, OpenContext, SubCatContext } from "../components/CartContext";




const LandingPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [cart, setCart] = useContext(CartContext);
  const [notiState, setNotiState] = useState(0);
  const [notiItems, setNotiItems] = useState(false)
  const [data, setdata] = useContext(UserContext);
  const [loggedin, setLoggedin] = useState(false);
  
  
 
  const customStyles = {
    content : {
      top                   : '5%',
      left                  : '20%',
      right                 : '20%',
      bottom                : '10%',
      padding               : '0',
      height                :'fit-content',
      overflow              : 'visible'
    }
  };
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

  function getUnique(arr, comp) {
   
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

const val = 0;

  const uniqueIndustryData = getUnique(SearchData, "Industry");
  const IndustryType = uniqueIndustryData.map((SearchResult, index) => {
    return <li key={index}> {SearchResult.Industry}</li>;
  })
  const indytype = SearchData.map((item,index) => {
  return item.CompanyAccount
  })
  const container = useRef(null)
  useEffect(()=>{
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../blue-cirlce-animation.json')
     
    })
  }, [])

   
  return (
    
    <div id="header">
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
        <div className='iconcontainer'>
        <NavItem icon={geo} />
        <div className='LangChanger'>
          <div className='Lang-content'>
          <p><b>عربي</b></p>
          </div>
          </div>
        <NavItem   icon= { NotiCart}>
          <DropdownMenu2/>
        </NavItem> 
        
        <div className='notibellcontainer' onClick={()=> {setNotiState(0); setNotiItems(!notiItems);}}>
        <NotiBell className='notibell'  alerts={notiState}/>
       </div>
        {notiItems === true?
        <div className='notidrop'>No new notifications</div>
      :null}
        <NavItem   icon = {data.username? require(`../uploads/${data.username}.png`):  User}>
          <DropdownMenu /> 
        </NavItem>
        </div> 
      </Header>
      <nav className="navtabs">
        <ul className="navtabs-routes">
          <Link to='/LandingPage' className = {null}>The Hub</Link>
          
          <Link to='/LandingPage' className='ntrActive'>Home</Link>
          {LinkTabs('buyads',null)}
          <p>|</p>
          {LinkTabs('production', null)}
          <p>|</p>
          <Link to='/LandingPage' className = {null}>Virtual Events</Link>
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
     
      <div className="section1-div">

        <div className="section1">    
        
        <div className='extended-border'></div>
        <div className="container" ref={container}></div>
        <button className="Popup-btn" onClick={() => setModalIsOpen(true)}><div className='btntextcontainer'><div className='activate-btn'></div><br></br>LET'S<br></br> GET<br></br> STARTED<br></br><small>Click Here</small></div></button>                             
        
        
        
        </div> 
        <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={() => setModalIsOpen(false)}>
          <ModalSearchBox/>
          <div className="footer-select"><Link to="/TodaysDeals">Click here to browse all products →</Link></div>
      
      </Modal>
        
        <div className="section3">
          <div>
          
          <div className="section3-container">
            <div className="seeMoreCards">
              <Link className="tvclick" to="/AllCategories/TVAdvertising"></Link>
              <Link className="tvclick2" to="/AllCategories/Print"></Link>
              <Link className="tvclick3" to="/AllCategories/Radio"></Link>
              <Link className="tvclick4" to="/AllCategories/outOfHome"></Link>
            <img src={card2} alt="card1" />
            <button><Link to='/AllCategories'>See More</Link></button></div>
            <div className="seeMoreCards">
            <Link className="tvclick" to="/AllCategories/Production"></Link>
              <Link className="tvclick2" to="/AllCategories/Production"></Link>
              <Link className="tvclick3" to="/AllCategories/Production"></Link>
              <Link className="tvclick4" to="/AllCategories/Production"></Link>
            <img src={card3} alt="card2" />
            <button><Link to= "/AllCategories/Production">See More</Link></button></div>
            <div className="seeMoreCards">
            <img src={card4} alt="card3" />
            <button><Link to='/AllCategories/Hardware'>See More</Link></button></div>
          </div>
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Digital </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              {/* <div className="top-pick-images2"> */}
               <Item><img src={require("../Pictures/LandingPage/top1-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top2-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top3-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top4-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top5-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top6-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top7-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
               <Item><img src={require("../Pictures/LandingPage/top8-4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              {/* </div> */}
              </Carousel>
              <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>

          </div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Abu Dhabi Products</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv8.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>National Geographic Abu Dhabi</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh2.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Hamdan Street</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/RadioAd/rad1.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Abu Dhabi Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Cinema/cin5.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Cine Royal Khalidiyah Mall</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Print/prt15.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>The National</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv2.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Abu Dhabi TV</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Print/prt8.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>7 Days</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>9,870<sup>.00</sup></p></b>
                </div>
                </Item>
               <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh1.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Electra Street Madinat Zayed</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>3,000<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Most Popular Items</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv10.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> CNBC Arabiya</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/RadioAd/rad18.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>  Virgin Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/LandingPage/SMM.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Social Media Management</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv28.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Fox Movies</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/VO/Thumbnail2.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>2D Explainer Video</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/OutofHome/ofh7.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Dubai Flower Center Bridge 2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/Cinema/cin1.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Vox Mall of The Emirates</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>9,870<sup>.00</sup></p></b>
                </div>
                </Item>
               <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <img src={require("../Pictures/TVAD/tv35.png")}/>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> MBC 2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,990<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Promotional Items</h2>

              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/TS1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Branded Round Neck Cotton</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/BC2.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Business Cards</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Mask1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Fabric Five Filter Face Mask</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/USB1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Twister USB</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/NP3.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Soft Cover Notepad</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Cap1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Branded Baseball Cap</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Speaker1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Branded Metallic Speaker</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/CPB1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Light up Power Bank</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
               
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Voice Overs</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishFemaleNA.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - American, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                  <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishMaleNA.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - American, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SpanishFemale.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Spanish - Latin American, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishFemaleEU.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - British, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SpanishMale.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Spanish - Latin American, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/newThumbnail.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Arabic - Classical, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/EnglishMaleEU.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>English - British, Male</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>

                <Item>
                <div className="thumbnail-sec">
               
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/newThumbnail.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Arabic - Classical, Female</p>
                <p>Word Count: 50</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          <div className="section3-container">
            <div className="seeMoreCards">
            <img src={card1} alt="card1" />
            <button><Link to= "/TodaysDeals">See More</Link></button></div>
            <div className="seeMoreCards">
            <img src={card6} alt="card2" />
            <button>See More</button></div>
            <div className="seeMoreCards">
            <img src={card5} alt="card3" />
            <button>See More</button></div>
          </div>

          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Cameras</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img src={require("../Pictures/LandingPage/cam1.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam2.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam3.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/lens1.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam4.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam5.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/lens2.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/cam6.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>New Items</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt14.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Khaleej Times</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,650<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Promo/Mask2.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Colour Five Filter Face Mask</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                

                
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/TVAD/tv6.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> BBC Arabic</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/RadioAd/rad5.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Quran Kareem Radio</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/AWD/ADIOS.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>App Development - iOS</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt2.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Gulf News</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/AWD/WD5P.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Website Content</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">

                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Mobile Marketing</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>

          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Recommended</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null }
          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Because You Bought: [value]</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null}
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>{'Video & Animation'}</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                  <div className='iconPic'>
                  <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SP2.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Spokesperson Video (female)</p>
          
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,350<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>  Commercial #1</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>6,230<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail2.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> 2D Explainer Video</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>5,250<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo Animation</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>1,000<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/SP1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Spokesperson Video (male)</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item><Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/VO/Thumbnail1.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Commercial #2</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>8,230<sup>.00</sup></p></b>
                </div>
                </Item>

               
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div>
          { val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Last Viewed</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
               </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null }
          {val > 0 ? <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>Saved</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img/></Item>
              </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
            </div>
          </div> : null}
          
    
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2>TV</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top1-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top2-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top3-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top4-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top5-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top6-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top7-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/TVAdvertising"><img src={require("../Pictures/LandingPage/top8-7.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              </Carousel>
                <div className="carousel-btn">
                <Link to='/AllCategories/TVAdvertising'><button className="seemorebtn-carousel">See More →</button></Link>
                </div>
            </div>
          </div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Dubai Products </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><img src={require("../Pictures/LandingPage/top1-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top2-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top3-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top4-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top5-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top6-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item><img src={require("../Pictures/LandingPage/top7-10.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Item>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/RadioAd/rad16.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Dubai 92FM</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,530<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
          </div></div>
       
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Logo {'&'} Website Design</h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/Collateral-full.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Collateral – Full</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoE.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Logo - Style E</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoM.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style M</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoG.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style G</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoC.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Logo - Style C</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoD.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style D</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoP.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style P</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/LogoCol/LogoT.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p> Logo - Style T</p>
                
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>500<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <button className="seemorebtn-carousel">See More →</button>
                </div>
          </div></div>
          
          <div className="section3-bottom-container">
            <div className="top-picks-container"> 
              <h2> Print </h2>
              <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top1-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top2-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top3-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top4-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top5-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top6-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item><Link  to="/AllCategories/Print"><img src={require("../Pictures/LandingPage/top7-9.jpg")}/><div className="favorite-icon-lul"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div></Link></Item>
              <Item>
                <div className="thumbnail-sec">
                
                <div className='iconPic'>
                <Link  to="/AllCategories/Production">
                <img src={require("../Pictures/Print/prt5.png")}/></Link>
                <div className="favorite-icon-lul2"><FormControlLabel  control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}/></div>
                </div>
                <p>Al Waseet</p>
                <ReactStars edit={false} count= {5} value={5} size={30} activeColor="#ffd700"/> 
                <b><p><sup>AED</sup>7,330<sup>.00</sup></p></b>
                </div>
                </Item>
                </Carousel>
                <div className="carousel-btn">
                <Link to='/AllCategories/Print'><button className="seemorebtn-carousel">See More →</button></Link>
                </div>
          </div></div>
          
          
          
          </div>
          {/* <div className="section2">
          <div className="section2-container">
           
              <div className="section2-text-bottom">
              <h2>Create a Tailored Campaign</h2>
              </div>
               <div className="section2-btn-wrapper">
            <button className="Popup-btn" onClick={() => setModalIsOpen(true)}>Start Now!</button>
            
            </div>
          </div>
        </div> */}
        </div>
        {/* <div className="Hseperator"></div> */}
        {/* <div className="section4">
          <h1 id= "HowItWorks">How It Works!</h1>
          <div className="section4-banners">
            <img src={banner1} alt="b1" />
            <img src={banner2} alt="b2" />
            <img src={banner3} alt="b3" />
            <img src={banner4} alt="b4" />
          </div>
          <div className="section4-buffer"></div>
        </div>
        <div className="section5">
          <div className="section5-vid-container">
          <ReactPlayer className="dexContainer" controls={true} url={"https://youtu.be/gMPxtlWYKZk"}/>
            
          </div>
          <div className="section5-container">
            <div className="section5-tabs">
              <NavItem2 icon={<Location2Icon />} />
             
              <NavItem2 icon={<ComputerIcon />} />
              
              <NavItem2 icon={<MarketingIcon />} />
              
              <NavItem2 icon={<Marketing2Icon />} />
            </div>
            <div className="section5-text">
              <h1>29 Countries Worldwide</h1>
              <h1>Automated Service</h1>
              <h1>$312,784,134 In Advertising Spots</h1>
              <h1>Online Integration</h1>
            </div>
          </div>
        </div>
        
        <div  className="section6">
          <div id="SellAdvertising" className="section6-container" >
            <h1 >Become Our Partner</h1>
            <img src={quotes} alt="quotes" />
            <div className="gallery-container">
              <div className="inner-gallery-container">
              <img src={logo1} />
              </div>
            </div>
          </div>
        </div>
        
        <div className="section7">
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
        </div>
        <div className="section8">
          <div className="section8-quotes">
            <div className="section8-btn">
              <button>Sign In</button>
            <PageLink
    activeClass="active"
    to="header"
    spy={true}
    smooth={true}
    offset={0}
    duration={100}><button>Back to Top</button></PageLink>
    
            </div>
          </div>
        </div>
        <div className="section9">
          <div className="section9-contact">
            <img src={contactBanner} alt="c1" />
          </div>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

function NavItem2(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="nav-item2">
      <button className="icon-button2" onClick={() => setModalIsOpen(true)}>
        {props.icon}
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <AutoCompleteText />
        <div>
          <button onClick={() => setModalIsOpen(false)}>close</button>
        </div>
      </Modal>
    </div>
  );
}
const categories = [
  "TV",
  "Cinema",
  "Radio",
  "Print",
  "Out Of Home",
  "Digital",
  "Production",
];
const catItems = categories.map((cat, index) => (
  <Link to={"/AllCategories/"+cat.replace(/ /g,'')} className="category-dd">
    {cat}
  </Link>
));

const tabs = [
  "Today's Deals",
  "About Us",
  "Hardware",
  "Sell Advertising",
  "Contact Us",
  "Career",
  "Help",
];
const tabItems = tabs.map((tab) => (
  <Link to={"/"+tab.replace(/ /g,'')} className="tabIcons"onClick={() => console.log("/"+tab.replace(/ /g,''))} >
    {tab}
  </Link>
));

function Header(props) {
  return (
    <div> 
      <nav className="navbar">
        <ul className="navbar-nav">
          <div className="logoAndText">
            <Link to="/LandingPage" className="logoName">
             <img
                className="logo"
                src={require("../Pictures/LandingPage/CompanyLogo.png")}
                alt="company"
              />
              <h1>Tasweiq</h1>
            </Link>
          </div>
          {props.children}
        </ul>
      </nav>
      
    </div>
  );
}
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-options">
        <div className="footer-option-container1">
          <h1>Get To Know Us</h1>
          <h2>Careers</h2>
          <h2>Blog</h2>
          <h2>About Tasweiq</h2>
          <h2>Investor</h2>
          <h2>Our Philanthropy</h2>
          <h2>Consulting Services</h2>
          <h2>Auditing Services</h2>
          <h2>Our Partners</h2>
        </div>
        <div className="footer-option-container2">
          <h1>Make Money With Us</h1>

          <h2> Sell on Tasweiq</h2>
          <h2>Sell Your Production Services</h2>
          <h2>Become An Affilate</h2>
          <h2>Advertise Your Products</h2>
          <h2>Merchant Policy</h2>
          <h2>Manage Your Account</h2>
        </div>
        <div className="footer-option-container3">
          <h1>Let Us Help</h1>

          <h2>Your Account</h2>
          <h2>Your Order</h2>
          <h2>Uploading Difficulties</h2>
          <h2>Tasweiq Hotline</h2>
          <h2>FAQ’s</h2>
          <h2>Help</h2>
          <h2>Payments</h2>
          <h2>Policies</h2>
          <h2>Reload Your Balance</h2>
        </div>
      </div>
      <div className="footer-images">
        <img src={icon3} alt="I1" />
        <img src={icon2} alt="I1" />
        <img src={icon1} alt="I1" />
      </div>
      <div className="footer-border">
        <h3>Condition of Use </h3>
        <h3>©2021 by Tasweiq</h3>
        <h3>Privacy Notice</h3>
      </div>
    </div>
  );
}

function DropdownCat(){
  const [cat, setCat] = useState('');
  
  const handleChange = (event) => {
    setCat(event.target.value);}

  return(
    <div className='newcatdrop'>
     <FormControl >
      <Select className='newselselect' value={cat} displayEmpty  onChange={handleChange} inputProps={{ 'aria-label': 'Without label' }}>
      
        <MenuItem className='newitem' value={''}>All Categories</MenuItem>
        <MenuItem className='newitem' value={'TV'}> TV</MenuItem>
        <MenuItem className='newitem' value={'Cinema'}> Cinema</MenuItem>
        <MenuItem className='newitem' value={'Radio'}>Radio</MenuItem>
        <MenuItem className='newitem' value={'Print'}>Print</MenuItem>
        <MenuItem className='newitem' value={'OutOfHome'}>Out of Home</MenuItem>
        <MenuItem className='newitem' value={'Digital'}>Digital</MenuItem>
        <MenuItem className='newitem' value={'Production'}>Production</MenuItem>
      </Select>
      </FormControl>
    </div>
  )

}
export function LinkTabs(cat, name){
  const [display, setDisplay] = useState(false);
  const [display2,setDisplay2] = useState(false);
  const [display3, setDisplay3] = useState(false);
  const [display4, setDisplay4] = useState(false);
  const [display5, setDisplay5] = useState(false);
  const [display6, setDisplay6] = useState(false);
  const [subDisplay,setSubDisplay] = useState(false);
  const [subDisplay2,setSubDisplay2] = useState(false);
  const [subDisplay3,setSubDisplay3] = useState(false);
  const [SubCat, SetSubCat] = useContext(SubCatContext);
  return(
    <div className='linktabscontainer'>
    {cat === 'buyads'?
    <div onMouseLeave={()=>setDisplay(false)}  className='buyAdsdrop'> 
    <Link onMouseOver={()=> {setDisplay(true); setSubDisplay2(false); setSubDisplay3(false)}} className={name} to='/AllCategories'>Buy Ads</Link>
    {display === true ?
    <div  className='BuyAdscontainer'>
    <span className='BuyAdsSpan' >
      <Link onMouseOver={()=>setSubDisplay2(false)} className='buyAdsdroplink' to='/AllCategories/TVAdvertising'>TV</Link>
      <Link onMouseOver={()=>setSubDisplay2(false)} className='buyAdsdroplink' to='/AllCategories/Cinema'>Cinema</Link>
      <Link onMouseOver={()=>setSubDisplay2(false)} className='buyAdsdroplink' to='/AllCategories/Radio'>Radio</Link>
      <Link onMouseOver={()=>setSubDisplay2(false)} className='buyAdsdroplink' to='/AllCategories/Print'>Print</Link>
      <Link onMouseOver={()=>setSubDisplay2(false)} className='buyAdsdroplink' to='/AllCategories/OutOfHome'>Out of Home</Link>
      <Link  onMouseOver={()=>setSubDisplay2(true)} className='buyAdsdroplink' to='/AllCategories/Digital'>Digital</Link>
      {subDisplay2=== true?
      <div  onMouseOver={()=>setSubDisplay2(true)} className='BuyAdsSpan-sub-container2'>
            <div  className='BuyAdsSpan-sub'>
            <div  className='section1BA'>
            <Link>Mobile Marketing</Link>
            <Link>Instagram Advertising</Link>
            <Link>Facebook Advertising</Link>
            <Link>YouTube Advertising</Link>
            <Link>Linkedin Advertising</Link>
            <Link>Twitter Advertising</Link>
            <Link>Music platform</Link>
            </div>
            
          
            </div></div>
            :null}
      
      
    </span>
    </div>
    : null}
    </div> : null}
    
    {cat === 'production'?
    <div onMouseLeave={()=>setDisplay2(false)}  className='buyAdsdrop'>
    <Link to='/AllCategories/Production'  className={name} onMouseOver={()=> {setDisplay2(true); setSubDisplay(false); setSubDisplay3(false)}}>Production</Link>
    {display2 === true ?
    <div  className='BuyAdscontainer'>
    <span className='BuyAdsSpan' >
      <Link className='buyAdsdroplink' onMouseOver={()=>{setSubDisplay(false); setSubDisplay3(false)}} to='/AllCategories/Production/VoiceOvers'>Voice Over</Link>
      <Link className='buyAdsdroplink'  onMouseOver={()=>setSubDisplay(true)} to='/Allcategories/Production/PromotionalItems'>Promotional Items</Link>
        {subDisplay=== true ?
        <div  onMouseOver={()=>setSubDisplay(true)} className='BuyAdsSpan-sub-container'>
            <div  className='BuyAdsSpan-sub'>
            <div className='section1BA'>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=> {SetSubCat(1); setSubDisplay(false); setDisplay2(false)}}>{'Chargers & Power Banks'}</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(2); setSubDisplay(false); setDisplay2(false)}}>Pens</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(3); setSubDisplay(false); setDisplay2(false)}}>Face Masks</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(4); setSubDisplay(false); setDisplay2(false)}}>NoteBooks</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(5); setSubDisplay(false); setDisplay2(false)}}>Speakers</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(6); setSubDisplay(false); setDisplay2(false)}}>Mugs</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(7); setSubDisplay(false); setDisplay2(false)}}>Caps</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(8); setSubDisplay(false); setDisplay2(false)}}>T-Shirts</Link>

             </div>
             <div className='section1BA'>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(9); setSubDisplay(false); setDisplay2(false)}}>Bags</Link>
           
            
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(10); setSubDisplay(false); setDisplay2(false)}}>Folders</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(11); setSubDisplay(false); setDisplay2(false)}}>Mobile Covers</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(12); setSubDisplay(false); setDisplay2(false)}}>Flags</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(13); setSubDisplay(false); setDisplay2(false)}}>Stickers</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(14); setSubDisplay(false); setDisplay2(false)}}>Company Stamps</Link>
            <Link to='/Allcategories/Production/PromotionalItems-Results' onClick={()=>{SetSubCat(16); setSubDisplay(false); setDisplay2(false)}}>Stress Balls</Link>
            </div>
            </div></div>
            :null}
      <Link className='buyAdsdroplink' onMouseOver={()=>{setSubDisplay(false); setSubDisplay3(false)}} to='/Allcategories/Production/VideoAnimation'>{'Video & Animation'}</Link>
      <Link className='buyAdsdroplink' onMouseOver={()=>{setSubDisplay(false); setSubDisplay3(false)}}  to='/AllCategories/Production/AdDesignArtwork'>{'Ad Design & Artwork'}</Link>
      <Link className='buyAdsdroplink' onClick={()=> SetSubCat(15)} onMouseOver={()=> { setSubDisplay(false); setSubDisplay3(true)}} to='/AllCategories/Production/LogoDesignCollateral'>{'Logo Design & Collateral'}</Link>
      {subDisplay3=== true?
      <div  onMouseOver={()=>setSubDisplay3(true)} className='BuyAdsSpan-sub-container3'>
            <div  className='BuyAdsSpan-sub'>
            <div  className='section1BA'>
            <Link  to='/AllCategories/Production/LogoDesignCollateral' onClick={()=> SetSubCat(15)}>Collateral</Link>
            <Link  to='/AllCategories/Production/LogoDesignCollateral' onClick={()=> SetSubCat(15)}>Logo Design</Link>
            <Link  to='/AllCategories/Production/LogoDesignCollateral' onClick={()=> SetSubCat(15)}>Business Card Prints</Link>
            </div>
            
          
            </div></div>
            :null}
  
      <Link className='buyAdsdroplink' onMouseOver={()=>{setSubDisplay(false); setSubDisplay3(false)}} to='/AllCategories/Production/AppWebsiteDesign'>{'App & Web Design'}</Link>
      <Link className='buyAdsdroplink' onMouseOver={()=>{setSubDisplay(false); setSubDisplay3(false)}} to='/AllCategories/Production/ContentScriptWriting'>{'Content & Script Writing'}</Link>
      
 
    </span>
    </div>
    : null}
    </div>
    
    :null}
    {cat === 'hardware'?
    <div onMouseLeave={()=>setDisplay3(false)}  className='buyAdsdrop2'>
    <Link to='/AllCategories/Hardware' className={name} onMouseOver={()=> setDisplay3(true)}>Hardware</Link>
    {display3 === true ?
    <div  className='BuyAdscontainer'>
    <span className='BuyAdsSpan' >
      <div className='section1BA'>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/CameraAndLenses'>{'Camera & Lenses'}</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/AcousticFoam'>Acoustic Foam</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/MusicAndEquipment'>Music Equipment</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/BackgroundScreen'>Background Screen</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/Cables'>Cables</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/ComputersAndLaptops'>{'Computers & Laptops'}</Link>
      </div>
      <div className='section2BA'>
    <Link className='buyAdsdroplink' to='/AllCategories/Hardware/HeadPhones'>Headphones</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/Lighting'>Lighting</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/MicrophoneStandsAndFilters'>{'Microphone, Stands & Filters'}</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/Software'>Software</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/Speakers'>Speakers</Link>
      <Link className='buyAdsdroplink' to='/AllCategories/Hardware/Workstation'>Workstation</Link>
      </div>
    </span>
    </div>
    : null}
    </div>
    :null}
    {cat === 'careers'? 
     <div onMouseLeave={()=>setDisplay4(false)}  className='buyAdsdrop'>
     <Link to="/Career" className={name} onMouseOver={()=> setDisplay4(true)}>Careers</Link>
     {display4 === true ?
     <div  className='BuyAdscontainer'>
     <span className='BuyAdsSpan' >
       <Link className='buyAdsdroplink' to='/Career/WhyWorkWithUs'>Why Work With Us</Link>
       <Link className='buyAdsdroplink' to='/Career/CurrentJobOpenings'>Current Job Openings</Link>
       
     </span>
     </div>
     : null}
     </div>
    :null}
    {cat === 'aboutus'? 
     <div onMouseLeave={()=>setDisplay5(false)}  className='buyAdsdrop'>
     <Link className={name} to= "/AboutUs" onMouseOver={()=> setDisplay5(true)}>About Us</Link>
     {display5 === true ?
     <div  className='BuyAdscontainer'>
     <span className='BuyAdsSpan' >
       <Link className='buyAdsdroplink' to='/AboutUs/VisionAndMission'>Vision and Mission</Link>
       <Link className='buyAdsdroplink' to='/AboutUs/CoreValues'>Core Values</Link>
       <Link className='buyAdsdroplink' to='/AboutUs/WhatWeDo'>What We Do</Link>
       <Link className='buyAdsdroplink' to='/AboutUs/CEOMessage'>CEO Message</Link>
       <Link className='buyAdsdroplink' to='/AboutUs/OurConsultants'>Our Consultants</Link>

     </span>
     </div>
     : null}
     </div>
    : null}
    {cat === 'help'?
    <div onMouseLeave={()=>setDisplay6(false)}  className='helpcontainer'>
    <Link to="/Help" className={name} onMouseOver={()=> setDisplay6(true)}>Help</Link>
    {display6 === true ?
    <div  className='BuyAdscontainer'>
    <span className='BuyAdsSpan' >
      <Link className='buyAdsdroplink' to='/Help/Feedback'>Feedback</Link>
      <Link className='buyAdsdroplink' to='/Help/FAQ'>FAQ's</Link>
      <Link className='buyAdsdroplink' to='/Help/LogAComplaint'>Log a Complaint</Link>
      

    </span>
    </div>
    : null}
    </div>
    :null}
    
    </div>
  )
}

// on change set state onChange= {()=> handleChange()}
function CategoryItem(props) {
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('All Categories')
  return (
    <button className="cat-button" onClick={() => setShow(!show)} >  
      <p>{categories}</p>
        <span>
          <DownArdiv width="50%" height="50%" />
        </span>
      
      {show && props.children}
    </button>
  );
}
function CatyItem(props) {
  return (
    <div className="dropdown2">
      <ul className="cat-dd">
     <Link to= "/AllCategories/TVAdvertising" className="category-dd">TV</Link>
  <Link to="/AllCategories/Cinema" className="category-dd"> Cinema </Link>
  <Link to="/AllCategories/Radio" className="category-dd">Radio</Link>
  <Link to="/AllCategories/Print" className="category-dd">Pint</Link>
  <Link to="/AllCategories/OutOfHome" className="category-dd">Out of Home</Link>
  <Link to="/AllCategories/Digital" className="category-dd">Digital</Link>
  <Link to="/AllCategories/Production" className="category-dd">Production</Link>
      </ul>
    </div>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useContext(OpenContext);
  const [cart, setCart] = useContext(CartContext);
  let name =props.icon
  return (
    name === CartIcon ?
    <li className="nav-item" onMouseLeave={() => setOpen2(false)} >
      <img  src={props.icon} className={props.icon}   href="#" className="icon-button"onMouseOver={() => setOpen2(true)} onClick={() => setOpen2(!open2)}/>
  
      
  { cart.length > 0 ? <span className="itemcountIcon">{cart.length}</span> : null}
      

      {open2 && props.children}
      
     
    </li> :

    <li className="nav-item" onMouseLeave={() => setOpen(false)}>
    <img  src={props.icon} className={props.icon}  href="#" className="icon-button"    onMouseOver={() => setOpen(true)} onClick={() => setOpen(!open)}/>

    
{ cart.length > 0 ? <span className="itemcountIcon">{cart.length}</span> : null}
    

    {open && props.children}
    
   
  </li>
  );
}

function DropdownMenu() {
  const [data, setdata] = useContext(UserContext);
  

  function DropdownItem(props) {
    return ( 
   
      <a href={props.path|| '#'} className="menu-item">
        <span className="icon-Left">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  const [Rank, setRank] = useState([{level:1, title: 'Practitioner'}]);
  const [points] = useState(parseInt(data.points));
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  return (
    <div className="dropdownForIcon">
     <div className='profilecontents'>
         <img className='useracc' src={data.username? require(`../uploads/${data.username}.png`):  useracc}></img>
         {/* Level and exp needs state  */}
         
         <span style={data? {visibility: 'visible'} : {visibility: 'hidden'}} className='levelbanner'><span className='levelStar'>★</span>Level: <span className='levelnum'>{Rank[0].level}</span></span>
         {  points < 1000?()=>  setRank({level:1, title: 'Practitioner'}): null}
    { points > 1000 && points < 10000 ?()=> setRank({level:2, title: 'Practitioner'}): null}
    {points >= 10000 && points < 100000 ?()=>  setRank({level:3, title: 'Practitioner'}): null}
   {  points >= 100000 && points < 250000 ?()=>  setRank({level:1, title: 'Professor'}): null}
    { points >= 250000 && points < 500000 ?()=>  setRank({level:2, title: 'Professor'}): null}
    { points >= 500000 &&points < 1000000 ?()=>  setRank({level:3, title: 'Professor'}): null}
    { points >= 1000000 && points < 2500000 ?()=>  setRank({level:1, title: 'Guru'}): null}
    { points >= 2500000 && points < 500000 ?()=>  setRank({level:2, title: 'Guru'}): null}
    {points >= 500000 && points < 10000000 ?()=>  setRank({level:3, title: 'Guru'}): null}
    { points >= 10000000 && points < 20000000 ?()=>  setRank({level:1, title: 'Grand Master'}): null}
    { points >= 20000000 && points < 35000000?()=>  setRank({level:2, title: 'Grand Master'}): null}
    { points >= 35000000 && points < 50000000 ? ()=> setRank({level:3, title: 'Grand Master'}): null}
    { points > 50000000 && points < 100000000 ?()=>  setRank({level:1, title: 'Grand Wizard'}): null}
   { points > 100000000 ?()=> setRank({level:1, title: 'Great Grand Wizard'}): null}
          <small style={data? {visibility: 'visible'} : {visibility: 'hidden'}}>Exp: <span className='levelnum'>{data.points? data.points: 0}</span></small>
         {data ?<p>{ data.username}</p>: <p>Guest</p>}
         {console.log(data)}
         {console.log(Rank)}
         {console.log(points)}
        
         
         {data?<small style={{color:"rgb(255, 131, 79)"}}>| {Rank[0].title} |</small>: null }
         <small style={{visibility:'hidden'}}>last logged in: {today.toLocaleDateString()}</small>
         
         </div>
     <div className='DropdownProfileIcon'>
       <div className='dropdownProfileOverlay'>
        
         </div>
     </div>
    {data.username? 
    <>
     <DropdownItem>Profile</DropdownItem>
      <DropdownItem > <a href="https://www.tasweiq.com/dashboard" ><b>Dashboard </b></a></DropdownItem>
      <DropdownItem>Manage Your Orders</DropdownItem></>: null}
      {!data.username?<DropdownItem path="#/signin" leftIcon=" "><b onClick={()=> setdata('')}>Sign In</b></DropdownItem>: null}
      <DropdownItem>{"Refer & Get $2000"}</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <hr  className="Dseperator"></hr>
      <DropdownItem>AED</DropdownItem>
      <DropdownItem>Help</DropdownItem>
      <DropdownItem>{"Feedback & Complaint"}</DropdownItem>
      {data.username?  <DropdownItem path="#/signin" leftIcon=" "><b onClick={()=> setdata('')}>Logout</b></DropdownItem> : null}
    </div>
  );
}

 function DropdownMenu2(){
  const [open2, setOpen2] = useContext(OpenContext);
  const [cart,setCart] = useContext(CartContext);

 const cartprev = cart.map((crtp,index) => {
  return <div className="itemPadding">
    <div className='prevcontainer'>
    <img src={require("../Pictures/"+ crtp.Sec+ "/" + crtp.Image + ".png")}/>
    <small>{crtp.Title}</small>
    </div>
    <span onClick={()=> RemoveFromCart(index)}>x</span>
  </div>
})
const RemoveFromCart = (index) =>{
  var newCart = cart;
  newCart.splice(index,1);
  setCart([...newCart])
  console.log(newCart)
  console.log(cart)
}
const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
  function DropdownItem(props){
  return (
    <a href="#" className="menu-item">
      <span className="icon-Left">{props.leftIcon}</span>
      {props.children}
      <span className="icon-right">{props.rightIcon}</span>
    </a>
  );
}

  return (
   <div className="dropdownForIcon2" onMouseLeave={() => setOpen2(false)}>
      <h3 className="cartprevItems">Items({cartprev.length})</h3>
        <div className="cartPreview" >
        {cartprev}
        
          
        </div>
        <div className="totandcart">
        <button onClick={()=>setOpen2(false)} className="gotocartbtn">Continue Shopping</button>
        <p>Subtotal: {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p>
          <button className="gotocartbtn"><Link to= "/Cart">Go to cart</Link></button>
        </div>
      
    </div> 
  );
  
}

export  {LandingPage, Header,Footer,CategoryItem,CatyItem,DropdownMenu,DropdownMenu2,DropdownCat, NavItem};
