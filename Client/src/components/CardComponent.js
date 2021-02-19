import React, { useState,useRef, useEffect } from "react";
import Card from "react-bootstrap/Card";
import AllCats from "../AllCategories.json";
import TVItems from "../TVItems.json"
import Dropdown from 'react-bootstrap/Dropdown'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ReactStars from "react-rating-stars-component";
import RadioAd from "../RadioAd.json";
import Cinemas from "../Cinema.json"
import OFH from "../OutOfHome.json";
import print from "../Print.json";
import VO from "../VO.json";
import hw from "../Hardware.json";
import hw2 from "../Hardware_AF.json";
import hw3 from "../Hardware_ME.json";
import hw4 from "../Hardware_BS.json";
import hw5 from "../Hardware_Cables.json";
import hw6 from "../Hardware_Comp.json";
import hw7 from "../Hardware_hed.json";
import hw8 from "../Hardware_Lit.json";
import hw9 from "../Hardware_Mic.json";
import hw10 from "../Hardware_Soft.json";
import hw11 from "../Hardware_Speak.json";
import hw12 from "../Hardware_Work.json";
import { Link } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { CartProvider, SubCatContext } from "./CartContext";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import { ProductContext } from "../components/CartContext";
import newCart from '../pages/Cart';
import Modal from "react-modal";
import ProgressBar from "./ProgressBar";
import user from '../icons/user.svg'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import logocol from "../logocol.json";
import AppWebDes from "../AppWebDes.json";
import GDI from "../GDI.json";
import PromoItems from "../PromoItems.json";
import VA from "../VA.json";
import csw from "../CSW.json";
import ReactPlayer from "react-player";







export function CardComponent(props) {
  
  return AllCats.map((cat) => {
    return (
        <div className="CardStyle">
      <Card  key={cat.id} >
        <Card.Title className='cardtitlediv'><h1>{cat.Title}</h1></Card.Title>
        <Card.Img
          variant="top"
          src={require("../Pictures/AllCat/" + cat.Image + ".png")}
        />
        <Card.Body>
          <Card.Text>
            {cat.SubCat.map((sub) => {
              return <li>{sub}</li>;
            })}
          </Card.Text>
          <Link to={'/AllCategories/' + cat.Title2}> <button variant="primary">View all in {cat.Title} →</button></Link>
        </Card.Body>
      </Card>
      </div>
    );
  });
}

export function CardComponent2() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [state, setState] = useState('')  
useEffect(()=>{
console.log('state did update')

},[state])
  
 
  return TVItems.map((tv,index) => {
   
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star, Slot: tv.Slot, Duration : tv.Duration};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  
  
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star, Slot: tv.Slot, Duration: tv.Duration};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  const changeO =  (index,value) =>{
   
    tv.Slot=value;
    tv.id===index ? setState(prev => prev = value)  : setState(state);
    
  }
  const changeO2 = async (index,value) =>{
   
    tv.Duration=value;
    tv.id===index ? setState(prev => prev = value)  : setState(state);
  }

  function stateChange(index){
    tv.id===index ? tv.Slot = state: setState(state);
  }

  
    return (
      
        <div className="CardStyle2">
      <Card className="cards" key={index} >
        <div className='picandfav'>
        <Link to='/Product'>
        <Card.Img className='card-img-chan' onClick= {updateState}  
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></Link>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          <div className='dropdown-card-sect'>
          <Dropdown onSelect={(e)=> changeO(index, e)}  className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id={index}>
  <p>Time Slot:</p>
    <p>{tv.Slot}</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item  eventKey="21:00">21:00</Dropdown.Item>
    <Dropdown.Item  eventKey="22:00">22:00</Dropdown.Item>
    <Dropdown.Item  eventKey="23:00">23:00</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<Dropdown  onSelect={(e)=> changeO2(index, e)} className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id={index}>
    <p>Duration:</p>
    <p>{tv.Duration}</p>
  </Dropdown.Toggle>
  <Dropdown.Menu className= 'DDitem-display'>
    <Dropdown.Item eventKey="30 seconds">30 seconds</Dropdown.Item>
    <Dropdown.Item eventKey="60 seconds">60 seconds</Dropdown.Item>
    <Dropdown.Item eventKey="90 seconds">90 seconds</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}

export function CardComponent3(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  console.log(props);
  return RadioAd.map((rad) => {

    const updateState = () => {
      const singleItem = {Title: rad.Title,Sec: rad.Sec, Price: rad.Price, Image: rad.Image, Key: rad.id, Star: rad.Star};
      setProduct(curr => [curr = singleItem]);
      console.log(singleItem);
      console.log(singleItem.Title)
      
    }
    const addToCart = () => {
      const cartItems = {Title: rad.Title,Sec: rad.Sec, Price: rad.Price, Image: rad.Image, Key: rad.id, Star: rad.Star};
      setCart (curr => [...curr, cartItems]);
      console.log(cartItems);
    }

    return (
        <div className="CardStyle2">
      <Card className="cards" key={rad.id} >
      <div className='picandfav'>
      <Link to='/Product'>
        <Card.Img onClick= {updateState}
          variant="top"
          src={require("../Pictures/"+ rad.Sec+ "/" + rad.Image + ".png")}
        /></Link>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div></div>
        <Card.Title className='cardtitlediv'>
          <div className= 'cc3-title'>
          <h2>{rad.Title}</h2>
          <h2>{rad.Station}</h2>
        </div>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={rad.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( rad.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
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
<div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
    );
  });
}
export function CardComponent4(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  console.log(props);
  return Cinemas.map((cin) => {

    const updateState = () => {
      const singleItem = {Title: cin.Title,Sec: cin.Sec, Price: cin.Price, Image: cin.Image, Key: cin.id, Star: cin.Star};
      setProduct(curr => [curr = singleItem]);
      console.log(singleItem);
      console.log(singleItem.Title)
      
    }
    const addToCart = () => {
      const cartItems = {Title: cin.Title,Sec: cin.Sec, Price: cin.Price, Image: cin.Image, Key: cin.id, Star: cin.Star};
      setCart (curr => [...curr, cartItems]);
      console.log(cartItems);
    }

    return (
        <div className="CardStyle2">
      <Card className="cards" key={cin.id} >
      <div className='picandfav'>
      <Link to='/Product'>
        <Card.Img onClick= {updateState}
          variant="top"
          src={require("../Pictures/"+ cin.Sec+ "/" + cin.Image + ".png")}
        /></Link>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div></div>
        <Card.Title className='cardtitlediv'>
          <div className= 'cc3-title'>
          <h2>{cin.Title}</h2>
        </div>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={cin.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( cin.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Placement Type:</p>
  <p>Cinema Screen 1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">Cinema Screen 1</Dropdown.Item>
    <Dropdown.Item href="#">Cinema Screen 2</Dropdown.Item>
    <Dropdown.Item href="#">2Cinema Screen 3</Dropdown.Item>
    <Dropdown.Item href="#">Follow an English Movie</Dropdown.Item>
    <Dropdown.Item href="#">Follow an Arabic Movie</Dropdown.Item>
    <Dropdown.Item href="#">Follow an Asian Movie</Dropdown.Item>
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
<div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
        
      </Card>
      </div>
    );
  });
}
export function CardComponent5(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  console.log(props);
  return OFH.map((ofh) => {

    const updateState = () => {
      const singleItem = {Title: ofh.Title,Sec: ofh.Sec, Price: ofh.Price, Image: ofh.Image, Key: ofh.id, Star: ofh.Star};
      setProduct(curr => [curr = singleItem]);
      console.log(singleItem);
      console.log(singleItem.Title)
      
    }
    const addToCart = () => {
      const cartItems = {Title: ofh.Title,Sec: ofh.Sec, Price: ofh.Price, Image: ofh.Image, Key: ofh.id, Star: ofh.Star};
      setCart (curr => [...curr, cartItems]);
      console.log(cartItems);
    }

    return (
        <div className="CardStyle2">
      <Card className="cards" key={ofh.id} >
      <div className='picandfav'>
      <Link to='/Product'>
        <Card.Img onClick= {updateState}
          variant="top"
          src={require("../Pictures/"+ ofh.Sec+ "/" + ofh.Image + ".png")}
        /></Link>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div></div>
        <Card.Title className='cardtitlediv'>
          <div className= 'cc3-title'>
          <h2>{ofh.Title}</h2>
        </div>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={ofh.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( ofh.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Placement Type:</p>
  <p>LED Screen</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">LED Screen</Dropdown.Item>
    <Dropdown.Item href="#">Bridge Banner</Dropdown.Item>
    <Dropdown.Item href="#">Unipole</Dropdown.Item>
    <Dropdown.Item href="#">Hoarding</Dropdown.Item>
    <Dropdown.Item href="#">Billboard</Dropdown.Item>
    <Dropdown.Item href="#">Lamppost</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    <p>Duration:</p>
    <p>2 weeks</p>
  </Dropdown.Toggle>
  <Dropdown.Menu className= 'DDitem-display'>
    <Dropdown.Item href="#">2 weeks</Dropdown.Item>
    <Dropdown.Item href="#">3 weeks</Dropdown.Item>
    <Dropdown.Item href="#">1 Month</Dropdown.Item>
    <Dropdown.Item href="#">2 Months</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
</div>
<div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
    );
  });
}
export function CardComponent6(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  console.log(props);
  return print.map((prt) => {

    const updateState = () => {
      const singleItem = {Title: prt.Title,Sec: prt.Sec, Price: prt.Price, Image: prt.Image, Key: prt.id, Star: prt.Star};
      setProduct(curr => [curr = singleItem]);
      console.log(singleItem);
      console.log(singleItem.Title)
      
    }
    const addToCart = () => {
      const cartItems = {Title: prt.Title,Sec: prt.Sec, Price: prt.Price, Image: prt.Image, Key: prt.id, Star: prt.Star};
      setCart (curr => [...curr, cartItems]);
      console.log(cartItems);
    }

    return (
        <div className="CardStyle2">
      <Card className="cards" key={prt.id} >
      <div className='picandfav'>
      <Link to='/Product'>
        <Card.Img onClick= {updateState}
          variant="top"
          src={require("../Pictures/"+ prt.Sec+ "/" + prt.Image + ".png")}
        /></Link>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div></div>
        <Card.Title className='cardtitlediv'>
          <div className= 'cc3-title'>
          <h2>{prt.Title}</h2>
        </div>
        </Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={prt.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( prt.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Placement Type:</p>
  <p>Inside Front Cover</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">Inside Front Cover</Dropdown.Item>
    <Dropdown.Item href="#">Back</Dropdown.Item>
    <Dropdown.Item href="#">Front Cover</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
</div>
<div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
    );
  });
}

export function CardComponent7() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [video, setvideo] = useState("")
  const customStyles = {
    content : {
      top                   : '20px',
      left                  : '10%',
      right                 : '10%',
      bottom                : '20px',
      padding               : '0',
      height                :'fit-content',
      overflow              : 'visible',
     
    }
  };

 
 
  return( 
  
    VO.map((tv,index) => {

     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  function preview(){
    setvideo(tv.Vid); 
    setModalIsOpen(true)
    console.log(video)
  }
  

  
    return (
      
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        {tv.Vid === video ?
          <Modal className="videoprev" id={index}  isOpen={modalIsOpen} style={customStyles}  onRequestClose={() => setModalIsOpen(false)}>
        <ReactPlayer width="auto" height="600px" controls={true} url={tv.Vid}/>
      </Modal> : null
  }
        <div className='picandfav'>
        
        
        <Card.Img onClick={preview} className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Word Count:</p>
  <p>50</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">50</Dropdown.Item>
    <Dropdown.Item href="#">100</Dropdown.Item>
    <Dropdown.Item href="#">300</Dropdown.Item>
    <Dropdown.Item href="#">500</Dropdown.Item>
    <Dropdown.Item href="#">1000</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  }
  ));
}
export function CardComponent8(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [subcat, setSubcat] = useContext(SubCatContext);

  
 return(
 <div style={{display:'flex', flexWrap: 'wrap'}}>
   {
logocol.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
          {props.Sub === null?
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            {tv.Station === "Logo" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Logo Concepts:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1 Concept</Dropdown.Item>
    <Dropdown.Item href="#">3 Concepts</Dropdown.Item>
    <Dropdown.Item href="#">5 Concepts</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className= "includingProducts">
  <p>*Vector File</p>
  <p>*3 Revisions</p>
</div>

</div>: null }

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      :null}
       {props.Sub === 1  ?
          tv.Sub === 1?
          <Card className="cards" key={tv.id} >
          <div className='picandfav'>
          
          <Card.Img className='card-img-chan'   
            variant="top"
            src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
          />
          <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
          checkedIcon={<Favorite />} name="checkedH" />}/>
          </div>
          </div>
          <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
          <Card.Body>
            <Card.Text>
              <div>
              <ReactStars edit={false}
      count= {5}
      value={tv.Star}
      size={24}
      activeColor="#ffd700"
    /> 
                <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
              </div>
            </Card.Text>
            <div className='optionBuy'>
              {tv.Station === "Logo" ?
            <div className='dropdown-card-sect'>
            <Dropdown className= 'card-dropdown'>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <p>Logo Concepts:</p>
      <p>1</p>
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <div className= 'DDitem-display'>
      <Dropdown.Item value ={500} href="#">1 Concept</Dropdown.Item>
      <Dropdown.Item href="#">3 Concepts</Dropdown.Item>
      <Dropdown.Item href="#">5 Concepts</Dropdown.Item>
      </div>
    </Dropdown.Menu>
  </Dropdown>
  <div className= "includingProducts">
    <p>*Vector File</p>
    <p>*3 Revisions</p>
  </div>
  
  </div>: null }
  
      <div className= 'card-btn-choice'>
        <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
        <button  onClick={addToCart }>Add to Cart</button>
        </div>
        </div>
          </Card.Body>
        </Card>
          
          :null : null}
           {props.Sub === 2  ?
          tv.Sub === 2?
          <Card className="cards" key={tv.id} >
          <div className='picandfav'>
          
          <Card.Img className='card-img-chan'   
            variant="top"
            src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
          />
          <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
          checkedIcon={<Favorite />} name="checkedH" />}/>
          </div>
          </div>
          <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
          <Card.Body>
            <Card.Text>
              <div>
              <ReactStars edit={false}
      count= {5}
      value={tv.Star}
      size={24}
      activeColor="#ffd700"
    /> 
                <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
              </div>
            </Card.Text>
            <div className='optionBuy'>
              {tv.Station === "Logo" ?
            <div className='dropdown-card-sect'>
            <Dropdown className= 'card-dropdown'>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
    <p>Logo Concepts:</p>
      <p>1</p>
    </Dropdown.Toggle>
    <Dropdown.Menu >
      <div className= 'DDitem-display'>
      <Dropdown.Item value ={500} href="#">1 Concept</Dropdown.Item>
      <Dropdown.Item href="#">3 Concepts</Dropdown.Item>
      <Dropdown.Item href="#">5 Concepts</Dropdown.Item>
      </div>
    </Dropdown.Menu>
  </Dropdown>
  <div className= "includingProducts">
    <p>*Vector File</p>
    <p>*3 Revisions</p>
  </div>
  
  </div>: null }
  
      <div className= 'card-btn-choice'>
        <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
        <button  onClick={addToCart }>Add to Cart</button>
        </div>
        </div>
          </Card.Body>
        </Card>
          
          :null : null}
      </div>
      
    );
    
  })

   }
   {PromoItems.map((tv,index)=>{
      const addToCart = () => {
        const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
        setCart (curr => [...curr, cartItems]);
        console.log(cartItems);
      }

     return(
        <div className='promocontainer'>
             {tv.Sub === 15 ?
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Quantity:</p>
    <p>100</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">100</Dropdown.Item>
    <Dropdown.Item href="#">300</Dropdown.Item>
    <Dropdown.Item href="#">500</Dropdown.Item>
    <Dropdown.Item href="#">1000</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className= "includingProducts">
  
</div>

</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div> 
      : null}
        </div>
     );
   })
  }
{/* <CardComponent11 Sub={subcat}  />  */}
 </div>)}
 

export function CardComponent9() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return GDI.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            {tv.Station === "design" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Design Concepts:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1 Design Concepts</Dropdown.Item>
    <Dropdown.Item href="#">3 Design Concepts</Dropdown.Item>
    <Dropdown.Item href="#">5 Design Concepts</Dropdown.Item>
    </div>
  </Dropdown.Menu>
  
</Dropdown>

<div className= "includingProducts">
  <p>Size:</p>
 <input type='text' ></input>
</div>

</div>: null }
{tv.Station === "menu" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Pages:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1 Page</Dropdown.Item>
    <Dropdown.Item href="#">3 Pages</Dropdown.Item>
    <Dropdown.Item href="#">5 Pages</Dropdown.Item>
    <Dropdown.Item href="#">7 Pages</Dropdown.Item>
    
    </div>
  </Dropdown.Menu>
  
</Dropdown>

<div className= "includingProducts">
<p>*Vector File</p>
  <p>*3 Revisions</p>
</div>

</div>: null }
{tv.Station === "CArt" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Design Concepts:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1 Concepts</Dropdown.Item>
    <Dropdown.Item href="#">3 Concepts</Dropdown.Item>
    <Dropdown.Item href="#">5 Concepts</Dropdown.Item>
    
    
    </div>
  </Dropdown.Menu>
  
</Dropdown>

<div className= "includingProducts">
<p>*Vector File</p>
  <p>*3 Revisions</p>
</div>

</div>: null }
{tv.Station === "story" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Per Frame:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1 Frame</Dropdown.Item>
    <Dropdown.Item href="#">2 Frames</Dropdown.Item>
    <Dropdown.Item href="#">3 Frames</Dropdown.Item>
    <Dropdown.Item href="#">4 Frames</Dropdown.Item>
    <Dropdown.Item href="#">5 Frames</Dropdown.Item>
    <Dropdown.Item href="#">6 Frames</Dropdown.Item>
    <Dropdown.Item href="#">7 Frames</Dropdown.Item>
    <Dropdown.Item href="#">8 Frames</Dropdown.Item>
    <Dropdown.Item href="#">9 Frames</Dropdown.Item>
    <Dropdown.Item href="#">10 Frames</Dropdown.Item>
    
    
    </div>
  </Dropdown.Menu>
  
</Dropdown>

<div className= "includingProducts">
<p>*Vector File</p>
  <p>*3 Revisions</p>
</div>

</div>: null }

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent10() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return AppWebDes.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            {tv.Station === "Logo" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Logo Concepts:</p>
    <p>1</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">1</Dropdown.Item>
    <Dropdown.Item href="#">3</Dropdown.Item>
    <Dropdown.Item href="#">5</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className= "includingProducts">
  <p>*Vector File</p>
  <p>*3 Revisions</p>
</div>

</div>: null }

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent11(props) {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [subcat, setSubCat] = useContext(SubCatContext);
  
  
  
 
  return PromoItems.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      <div className='promocontainer'>
        {props.Sub === null ?
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Quantity:</p>
    <p>100</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">100</Dropdown.Item>
    <Dropdown.Item href="#">300</Dropdown.Item>
    <Dropdown.Item href="#">500</Dropdown.Item>
    <Dropdown.Item href="#">1000</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className= "includingProducts">
  
</div>

</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div> 
      : null}
       {props.Sub === subcat  ?
          tv.Sub === subcat?
        <div className="CardStyle2">
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Quantity:</p>
    <p>100</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">100</Dropdown.Item>
    <Dropdown.Item href="#">300</Dropdown.Item>
    <Dropdown.Item href="#">500</Dropdown.Item>
    <Dropdown.Item href="#">1000</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className= "includingProducts">
 
</div>

</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>: null 
      : null}
      
      </div>
    );
  });
}
export function CardComponent12() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [video, setvideo] = useState("")
  const customStyles = {
    content : {
      top                   : '20px',
      left                  : '10%',
      right                 : '10%',
      bottom                : '20px',
      padding               : '0',
      height                :'fit-content',
      overflow              : 'visible',
    }
  };
  
 
  return VA.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star, Vid: tv.Vid};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star, Vid: tv.Vid};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
   
  function preview(){
    setvideo(tv.Vid); 
    setModalIsOpen(true)
    console.log(video)
  }
  const element = document.getElementById('target');


  
    return (
      
        <div className="CardStyle2">
          {tv.Vid === video ?
          <Modal className="videoprev" id={index}  isOpen={modalIsOpen} style={customStyles}  onRequestClose={() => setModalIsOpen(false)}>
        <ReactPlayer width="auto" height="600px"  controls={true} url={tv.Vid}/>
      </Modal> : null
  }
          
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img onClick={preview}  className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")} 
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format( tv.Price)}</h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
          {tv.Station === "time" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Duration:</p>
    <p>30 seconds</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item value ={500} href="#">30 seconds</Dropdown.Item>
    <Dropdown.Item href="#">60 seconds</Dropdown.Item>
    <Dropdown.Item href="#">90 seconds</Dropdown.Item>
    <Dropdown.Item href="#">120 seconds</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>


</div>: null }
{tv.Station === "word" ?
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Word Count:</p>
  <p>50</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">50</Dropdown.Item>
    <Dropdown.Item href="#">100</Dropdown.Item>
    <Dropdown.Item href="#">300</Dropdown.Item>
    <Dropdown.Item href="#">500</Dropdown.Item>
    <Dropdown.Item href="#">1000</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>


</div>: null }

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent13() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);
   const [price,setPrice] = useState(2);
  const [value, setValue] = useState(2);
  const [state, setState] = useState('') 
  let finalPrice = useRef(price);  
  useEffect(()=>{
    console.log('state did update')
    console.log(finalPrice.current)
    
    
    },[state])

 
  

  
 
  return csw.map(( tv,index) => {
  
  
      const changeO =  (index,value) =>{
        
        if (value > 9999){
     value=10000
   }
   tv.Price = value*2;
    tv.id===index ? setState(prev => prev = value)  : setState(state);
    
    
    
    
    
  }
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
         
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        
        <Card.Img className='card-img-chan'   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        />
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>

          <h3> Price: {Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)}</h3>     
              
              <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(2)} Per Word</h2>
              <small>* limit 10,000 words</small>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='dropdown-card-sect'>
          <Dropdown className= 'card-dropdown'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
  <p>Language:</p>
  <p>English</p>
  </Dropdown.Toggle>
  <Dropdown.Menu >
    <div className= 'DDitem-display'>
    <Dropdown.Item href="#">English</Dropdown.Item>
    <Dropdown.Item href="#">Arabic</Dropdown.Item>
    <Dropdown.Item href="#">Spanish</Dropdown.Item>
    <Dropdown.Item href="#">French</Dropdown.Item>
    <Dropdown.Item href="#">German</Dropdown.Item>
    <Dropdown.Item href="#">Dutch</Dropdown.Item>
    </div>
  </Dropdown.Menu>
</Dropdown>
<div className='dropdown-card-sect-input'>
            <div className='wordcount-container'>
         <p style={{margin:"2px", fontSize:'.7vw'}}>Word Count:</p>
         
         <input type="text" pattern="[0-9]" maxLength="4" onChange={(e)=> {setValue(e.target.value);changeO(index,e.target.value); console.log(finalPrice); }}  style={{width: '70%',borderRadius: '5px'}}></input>
         </div>

</div>
</div>


    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card> 
      </div>
      
    );
  });
}

export function CardComponent14() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan'    
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        ></Card.Img></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent15() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw2.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}   onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent16() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw3.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}   onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent17() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw4.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent18() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw5.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent19() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw6.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent20() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw7.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent21() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw8.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent22() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw9.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent23() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw10.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent24() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw11.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
export function CardComponent25() {
  const [cart, setCart] = useContext(CartContext);
  const [product, setProduct] = useContext(ProductContext);
  const [dropdownOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!dropdownOpen);

  
 
  return hw12.map((tv,index) => {
     
  const updateState = () => {
    const singleItem = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setProduct(curr => [curr = singleItem]);
    console.log(singleItem);
    console.log(singleItem.Title)
    
  }
  const addToCart = () => {
    const cartItems = {Title: tv.Title,Sec: tv.Sec, Price: tv.Price, Image: tv.Image, Key: tv.id, Star: tv.Star};
    setCart (curr => [...curr, cartItems]);
    console.log(cartItems);
  }
  

  
    return (
      
        <div className="CardStyle2">
           
      <Card className="cards" key={tv.id} >
        <div className='picandfav'>
        <a target="_blank" href={tv.Link}>
        <Card.Img className='card-img-chan' onClick= {updateState}   
          variant="top"
          src={require("../Pictures/"+ tv.Sec+ "/" + tv.Image + ".png")}
        /></a>
        <div className=""><FormControlLabel  labelPlacement="bottom" control={<Checkbox icon={<FavoriteBorder />} 
        checkedIcon={<Favorite />} name="checkedH" />}/>
        </div>
        </div>
        <Card.Title className='cardtitlediv'><h2>{tv.Title}</h2></Card.Title>
        <Card.Body>
          <Card.Text>
            <div>
            <ReactStars edit={false}
    count= {5}
    value={tv.Star}
    size={24}
    activeColor="#ffd700"
  /> 
              <h2>{Intl.NumberFormat('en-US' , {style: 'currency', currency: 'AED'}).format(tv.Price)} </h2>
            </div>
          </Card.Text>
          <div className='optionBuy'>
            
          <div className='card-btn-choice'>
          <a target="_blank" href={tv.Link}><button className='card-btn-choice-alt'>More Details</button></a>


</div>

    <div className= 'card-btn-choice'>
      <Link to='/Cart'><button onClick={addToCart}>Buy</button></Link> 
      <button disabled={true} style={{visibility:'hidden'}}  onClick={addToCart }>Add to Cart</button>
      </div>
      </div>
        </Card.Body>
      </Card>
      </div>
      
    );
  });
}
