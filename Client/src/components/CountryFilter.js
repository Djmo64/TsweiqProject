import React, { useState } from 'react'
import countries from './countries'
import Checkbox from '@material-ui/core/Checkbox';
import { Switch } from '@material-ui/core';



function CountryFilter(){

    const [Checked, setChecked] = useState([])
    const [showText, setShowText] = useState(false);

    const handleToggle = (value) => {
        
        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if(currentIndex === -1){
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
    }
    const CountryList = countries.map((cntry,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{cntry}</span>
            </div>
         );
    }
    )
    let CountryList2 = CountryList.splice(0,CountryList.length/2)

    return(
        <div className='seemorebtn'>
        <div>{CountryList2}</div>
        {showText && <div>{CountryList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button>
        </div>
    )
    
       
}
export default CountryFilter;