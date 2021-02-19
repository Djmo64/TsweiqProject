import React from "react";
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
  LinkTabs,
  DropdownMenu2,
  NavItem,
  LandingPage, DropdownCat
} from "../pages/LandingPage";
import ReactStars from "react-rating-stars-component";
import TVItems from "../TVItems.json"
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox} from "../components/SearchBox";
import Dropdown from 'react-bootstrap/Dropdown'
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { ProductContext } from "../components/CartContext";
import ProgressBar from "../components/ProgressBar";
import user from '../icons/user.svg'


const testData = [
  { bgcolor: "rgb(255 220 48)", completed: 75 },
  { bgcolor: "rgb(255 220 48)", completed: 25 },
  { bgcolor: "rgb(255 220 48)", completed: 15 },
  { bgcolor: "rgb(255 220 48)", completed: 7 },
  { bgcolor: "rgb(255 220 48)", completed: 3 },
];



export function Product(){
    const [cart, setCart] = useContext(CartContext);
    const [product, setProduct] = useContext(ProductContext);

    const addToCart = (props) => {
      const cartItems = {Title: TVItems.Title,Sec: TVItems.Sec, Price: TVItems.Price, Image: TVItems.Image, Key: TVItems.id, Star: TVItems.Star};
      setCart (curr => [...curr, props]);
      console.log(cartItems);
      console.log(props)
    }
   

    const productItem = product.map((prd,index)=> {
        const addToCart2 = () => {
        const cartItems = {Title: prd.Title, Sec: prd.Sec, Price: prd.Price, Image: prd.Image, key: prd.id};
        setCart (curr => [...curr, cartItems]);
        console.log(cartItems);
      }
            return (
          
                <div >
                  
              <div className='Image-description-modal'>
                <div className='section1-desc'>
                    <img src={require("../Pictures/"+prd.Sec+"/" + prd.Image + ".png")}/>
                    <h2><b>Product Description</b></h2>
                    <h3>Launched in July 2009, the free-to-air National Geographic Abu
        Dhabi invites viewers in the Middle East to re-think the way they
        see television - and the world - through smart, innovative
        programming in the Arabic language.</h3><h3> The world’s first free-to-air
        National Geographic Channel brought to the region by Abu
        Dhabi Media (ADM) and National Geographic Channels
        International (NGCI), is dedicated to understanding and protecting
        the world, with its worldwide reputation of producing credible and
        authentic content that fits different viewers’ interests.</h3><h3> Its
        programming is smart, factual entertainment weighted in favour
        of popular science, technology, natural history, archaeology and
        natural mysteries.</h3>
                    </div>
                    <div className='section2-desc'>
                      <div className='part1'>
                      <h3>{prd.Title}</h3>
                      <ReactStars edit={false} count= {5} value={prd.Star} size={14} activeColor="#ffd700"/> 
                       <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( prd.Price)}</h2>
                      <small><b>Cost per mile: $6.25*</b></small>
                      <small>*Note: You are looking at cost per thousand impressions</small>
                      <div className='dropdown-card-sect'>
                  <Dropdown className= 'card-dropdown'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
          <p>Time Slot:</p>
          <p>21:00</p>
          </Dropdown.Toggle>
          <Dropdown.Menu >
            <div className= 'DDitem-display'>
            <Dropdown.Item href="#">21:00</Dropdown.Item>
            <Dropdown.Item href="#">22:00</Dropdown.Item>
            <Dropdown.Item href="#">23:00</Dropdown.Item>
            </div>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className= 'card-dropdown'>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <p>Duration:</p>
            <p>30 seconds</p>
          </Dropdown.Toggle>
          <Dropdown.Menu className= 'DDitem-display'>
            <Dropdown.Item href="#">30 seconds</Dropdown.Item>
            <Dropdown.Item href="#">60 seconds</Dropdown.Item>
            <Dropdown.Item href="#">90 seconds</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
                      </div>
                      <div className ='part2'>
                        <div className = 'part2-sect1'>
                            <p>Broadcast Location:</p>
                            <p>Number of Viewers:</p>
                            <p>HD:</p>
                            <p>Advertising Type:</p>
                            <p>Language:</p>
                        </div>
                        <div className = 'part2-sect2'>
                        <p>U.A.E</p>
                        <p>21,332</p>
                        <p>Yes</p>
                        <p>Television</p>
                        <p>English</p>
                        </div>
                        
                      </div><div className= 'card-btn-choice2'>
                        <Link to='/Cart'><button onClick={addToCart2}>Buy Now</button></Link></div>
                    </div>
              </div>
              <div className= 'comment-section'>
                <div className='modal-rating-section'>
                  <p className='customer-revs'>Customer Reviews</p>
                  <div className='stars-comment'>
                  <ReactStars edit={false} count= {5} value={4} size={17} activeColor="#ffd700"/> 
                  <p>3.9 out of 5</p>
                  </div>
                  <small>35 customer ratings</small>
                  <div className='loading-bar-comment'>
                  {testData.map((item, idx) => (
                    <div className= 'starItem'>
                      <p>{5 - idx} Star</p>
                <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
                </div>
              ))}
                  </div>
                </div>
                <div className='customer-comments'>
                  <small><span><img src={user}/></span>Benjamin Jacob | Head of Marketing in XXX Company</small>
                  <ReactStars edit={false} count= {5} value={5} size={20} activeColor="#ffd700"/> 
                  <p>THIS SPACE WILL BE THE COMMENTS FROM THE USERS. THIS SPACE WILL
        BE THE COMMENTS FROM THE USERS. THIS SPACE WILL BE THE COMMENTS FROM THE USERS. THIS SPACE WILL BE THE COMMENTS FROM
        THE USERS. THIS SPACE WILL BE THE COMMENTS FROM THE USERS. THIS
        SPACE WILL BE THE COMMENTS FROM THE USERS. THIS SPACE WILL BE
        THE COMMENTS FROM THE USERS. THIS SPACE WILL BE THE COMMENTS
        FROM THE USERS. THIS SPACE WILL BE THE COMMENTS FROM THE USERS.</p>
                    <small><b>40 people found this helpful</b></small>
                    <div className='helpful-comment'>
                      <p>Helpful</p>
                      <p>Comment</p>
                      <p>Report Abuse</p>
                    </div>
                    <p className='seemorerev'>See More Reviews</p>
                    
        
                </div>
              </div>
              <div className='compareTo'>
                  <h2>Other Products To Compare</h2>
                  <div className='compareChoices'>
                        <div className='choiceAndBtn'>
                                <img src={require("../Pictures/"+prd.Sec+"/" + prd.Image + ".png")}/>
                                <p><b>This channel</b> National Geographic Abu Dhabi HD</p>
                                <button onClick= {(props)=>(addToCart)} >add to cart</button>
                        </div>
                        <div className='choiceAndBtn'>
                                <img src={require("../Pictures/TVAD/" + TVItems[1].Image + ".png")}/>
                                <p>{TVItems[1].Title}</p>
                                <button onClick={(props)=>addToCart(TVItems[1])}>add to cart</button>
                        </div>
                        <div className='choiceAndBtn'>
                                <img src={require("../Pictures/TVAD/" + TVItems[0].Image + ".png")}/>
                                <p>{TVItems[0].Title}</p> 
                                <button onClick={(props)=>addToCart(TVItems[0])}>add to cart</button>   
                        </div>
                        <div className='choiceAndBtn'>
                                <img src={require("../Pictures/TVAD/" + TVItems[39].Image + ".png")}/>
                                <p>{TVItems[39].Title}</p>
                                <button onClick={(props)=>addToCart(TVItems[39])} >add to cart</button>
                            
                        </div>
                  </div>
                  <div className='product-stats'>
                    <div className='stats-brac'>
                          <p>Customer Rating</p>
                          <p>Price</p>
                          <p>Channel</p>
                          <p>Ad Length</p>
                          <p>Language</p>
                          <p>Numbebr of Viewers</p>
                          <p>HD</p>
                          <p>How Many Countries?</p>
                          <p>Cost Per Mile (CPM)</p>
                          </div>
                          <div className='stat-div'>
                      <div className='stats'>
                          <div className='star-stat'>
                      <ReactStars edit={false} count= {5} value={prd.Star} size={20} activeColor="#ffd700"/></div>
                          <p>29,750 AED</p>
                          <p>National Geographic Abu Dhabi</p>
                          <p>30 Seconds</p>
                          <p>English</p>
                          <p>21,332</p>
                          <p>Yes</p>
                          <p>1</p>
                          <p>$6.25</p>
                      </div>
                      <div className='stats'>
                      <div className='star-stat'>
                      <ReactStars edit={false} count= {5} value={5} size={20} activeColor="#ffd700"/></div>
                          <p>25,000 AED</p>
                          <p>Abu Dhabi TV</p>
                          <p>30 Seconds</p>
                          <p>Arabic</p>
                          <p>22,880</p>
                          <p>Yes</p>
                          <p>1</p>
                          <p>$4.87</p>
                          
                      </div>
                      <div className='stats'>
                      <div className='star-stat'>
                      <ReactStars edit={false} count= {5} value={5} size={20} activeColor="#ffd700"/></div>
                          <p>18,000 AED</p>
                          <p>Al Emarat TV</p>
                          <p>60 Seconds</p>
                          <p>Arabic</p>
                          <p>18,372</p>
                          <p>Yes</p>
                          <p>1</p>
                          <p>$5.66</p>
                          
                      </div>
                      <div className='stats'>
                      <div className='star-stat'>
                      <ReactStars  edit={false} count= {5} value={3} size={20} activeColor="#ffd700"/></div>
                          <p>27,000 AED</p>
                          <p>MBC Action</p>
                          <p>30 Seconds</p>
                          <p>English</p>
                          <p>31,002</p>
                          <p>Yes</p>
                          <p>7</p>
                          <p>$3.89</p>
                          
                      </div>
                  </div>
                  </div>

              </div>
              
              </div>
          
        )
    })
    
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
      <div>
        {productItem}
      </div>
      <Footer/>
      </div>
      
    )
    
    
}
