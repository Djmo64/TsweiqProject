import React, { useState } from "react";
import { NavItem, DropdownCat,LinkTabs, DropdownMenu2, DropdownMenu,Header, Footer } from "./LandingPage";
import CartIcon  from "../icons/carticon.jpg";
import  WorldIcon  from "../icons/langicon.jpg";
import  User  from "../icons/signinicon.jpg";
import  PinIcon  from "../icons/locicon.jpg";
import { ReactComponent as Search } from "../icons/search.svg";
import {SearchBox, ModalSearchBox} from "../components/SearchBox";
import {Link} from "react-router-dom"
import 'react-tabs/style/react-tabs.css';
import SearchData from "../industries.json";
import Item from "antd/lib/list/Item";
import { Link as PageLink, animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import TVItems from '../TVItems.json'
import Carousel from 'react-elastic-carousel';




export function CartList(arr){
    
    return(
        <div>
            {arr}
        </div>
    )
}
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];

export const Cart= () => {
    const [cart, setCart] = useContext(CartContext)
     const cartItems = {Title: cart.Title, Price: cart.Price, Image: cart.Image,Sec: cart.Sec, key: cart.id};
    const addToCart = () => {
       
        setCart (curr => [...curr, cartItems]);
        console.log(cartItems);
      }
    const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
    const RemoveFromCart = (index) =>{
        var newCart = cart;
        newCart.splice(index,1);
        setCart([...newCart])
        console.log(newCart)
        console.log(cart)
    }
    const cartCards = cart.map((crt, idx)=>{
        return (
            <div className='cartCardComponent'>
                    <img src={require("../Pictures/"+ crt.Sec+ "/" + crt.Image + ".png")}/>
                    <div className='cart-details-card'>
                    <div>
                    <h2 className='title-cart-card'>{crt.Title}</h2>
                    </div>
                    <div className= 'qty-div'>
                    <div className='qty-select'>
                       <h2>QTY</h2>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    {crt.Sec === 'TVAD' ?
                    <div>
                    <p>Time Slot: 21:00</p>
                    <p>Duration: 30 seconds</p> 
                    </div>:null} 
                    </div>
                    <div className='item-cost-div'>
                    <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( crt.Price)}</h2>
                    <div className='save-div'>
                       <p className='sfl'>Save for later</p>
                       <p onClick={()=> RemoveFromCart(idx)} >Remove</p> 
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
    <div className='section2-cart-card'>
    <h1>Shopping Cart: ({cart.length + ' ' + 'items'})</h1>
        </div>
    <div className='cart-sectional-div'>
    <div className='section1-cart-div'>
     <div className='section1-cart-card'>
    {cartCards}
    </div>
    </div>
    <div className='section3-cart-div'>
        <div className='checkout-btn'>
            <Link to='/Payment'><button>Checkout</button></Link>
        </div>
    <div className='section3-cart-card'>
        <div className='totals'>
    <p>Item Total:</p> <p>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p></div>
    <div className='totals'>
    <p><b>Subtotal:</b></p> <p><b>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</b></p></div>
    </div>
    <div className='section4-cart-card'>
    <div className='totals'>
    <p>Shipping:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Surcharges:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Tax:</p> <p>0.00 AED</p></div>
    </div>
    <div className='section5-cart-card'>
    <div className='totals'>
    <p><b>Order total:</b></p><p><b>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</b></p>
    </div>
    </div>
    </div>
    </div>
    <div className='suggested-items'>
        
        <div className='sug-container'>
            <h2>Related Items</h2>
    <Carousel pagination={false} className="carousel-section" breakPoints={breakPoints}>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[10].Image + ".png")}/><h3>{TVItems[10].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[12].Image + ".png")}/><h3>{TVItems[12].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[4].Image + ".png")}/><h3>{TVItems[4].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[6].Image + ".png")}/><h3>{TVItems[6].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[8].Image + ".png")}/><h3>{TVItems[8].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[22].Image + ".png")}/><h3>{TVItems[22].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[15].Image + ".png")}/><h3>{TVItems[15].Title}</h3></div></Item>
              <Item><div className='sug-div'><img src={require("../Pictures/TVAD/" + TVItems[29].Image + ".png")}/><h3>{TVItems[29].Title}</h3></div></Item>
              </Carousel>
              </div>
    </div>
    <Footer/>
        </div>
    )
}






