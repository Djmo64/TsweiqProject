import React from "react";



function Header(props){
    return (

            <nav className="navbar">
                <ul className="navbar-nav">{props.children}</ul>     
            </nav> 
        
    )
}



export default Header;