import React from 'react';
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../components/CartContext";



export function Confirmation() {
    const [cart, setCart] = useContext(CartContext);
    const totalPrice = cart.reduce((acc, curr) => acc + curr.Price, 0 );
    
    const cartlist = cart.map((car) =>{
        return(
            <div >
            <div className='itemdes'>
                <img src={require("../Pictures/"+car.Sec+"/" + car.Image + ".png")}/>
                <div className='item-info-confirm'>
                <h2>{car.Title}</h2>
                <small>Time Slot: 21:00</small>
                <small>Duration: 30 seconds</small>
                </div>
            </div>
            
                
            </div>
            
         
        )
    })
    return(
        <div className='page-color'>
            <div className='confirm-container-check'>
            <Link to='/LandingPage'><img className='confirm-container-check-img' src={require('../Pictures/LandingPage/logo-org-blk-side.png')}/></Link>
                <div className='background-for-container'>
                <div className='confirm-container-sect1'>
                <div className="success-checkmark">
  <div className="check-icon">
    <span className="icon-line line-tip"></span>
    <span className="icon-line line-long"></span>
    <div className="icon-circle"></div>
    <div className="icon-fix"></div>
  </div>
</div>
<h1>Thank You for your order</h1>
</div>

<div className='cart-confirm-list'>
{cartlist}
</div>
<div className='emailAndTotal'>
    <div className='email-confirm'>
        <p>
        We will send you and order confirmation to [$userEmail-Data]
shortly. We will be in touch with updates to your order status.
        </p>
        <p>
        Your oder #: 4X5-Y6Z7
        </p>
        <p>
        To see your payment history and account info,
go to pay.tasweiq.com, then sign in.
        </p>
    </div>
    <div className='Total-confirm'>
    <div className='section3-2-cart-card'>
        <div className='totals'>
    <p>Item Total:</p> <p> {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</p></div>
    <div className='totals'>
    <p><b>subtotal:</b></p> <p><b>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</b></p></div>
    </div>
    <div className='section4-2-cart-card'>
    <div className='totals'>
    <p>Shipping:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Surcharges:</p> <p>0.00 AED</p></div>
    <div className='totals'>
    <p>Tax:</p> <p>0.00 AED</p></div>
    </div>
    <div className='section5-2-cart-card'>
    <div className='totals'>
    <p><b>Order total:</b></p><p><b>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( totalPrice)}</b></p>
    </div>
    </div>
    </div>
</div>
<p>Add details pertaining to your order.</p>

    <button className='confirmAndPaybtn2'><Link to="/Payment/Confirmation/AttachDetails">Attach Details</Link></button>
</div>
<button className='Back-to-home'><Link to='/LandingPage'> Back To Home</Link></button>
</div>

        </div>
    )
}