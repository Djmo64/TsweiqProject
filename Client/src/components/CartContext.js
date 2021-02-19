import React, { useEffect, useState } from 'react';

//all providers below are in use

export const CartContext = React.createContext();
export const ProductContext = React.createContext();
export const OpenContext = React.createContext();
export const SubCatContext = React.createContext();
export const UserContext = React.createContext();
export const PicContext = React.createContext();


export const PicProvider = (props) => {
    const [Pic, setPic] = useState(
       null
    );
   
    return(
        <PicContext.Provider value={[Pic,setPic]}>
            {props.children}
        </PicContext.Provider>
    )
}
export const UserProvider = (props) => {
    const [User, setUser] = useState(
        []
    );
    useEffect(()=>{
        const savedUserdata = window.localStorage.getItem('User-Information');        
       
        if(savedUserdata){
           setUser(JSON.parse(savedUserdata));
        }
       
      },[])
      //I have no Idea if this will lead to a security issue, but the data here is being saved locally for a period of time.
      
        useEffect(()=>{
          window.localStorage.setItem('User-Information', JSON.stringify(User));
          console.log(' login User Changed');
          
      },[User])
   
    return(
        <UserContext.Provider value={[User,setUser]}>
            {props.children}
        </UserContext.Provider>
    )
}

export const CartProvider = (props) => {
    const [cart, setCart] = useState(
        []
    );
   
    return(
        <CartContext.Provider value={[cart,setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}
export const ProductProvider = (props) => {
    const [product, setProduct] = useState(
        []
    );
    return(
        <ProductContext.Provider value={ [product, setProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}
export const OpenProvider = (props) => {
    const [open, setOpen] = useState(false);
   
    return(
        <OpenContext.Provider value={[open,setOpen]}>
            {props.children}
        </OpenContext.Provider>
    )
}
export const SubCatProvider = (props) => {
    const [cat, setCat] = useState(null);
   
    return(
        <SubCatContext.Provider value={[cat,setCat]}>
            {props.children}
        </SubCatContext.Provider>
    )
}