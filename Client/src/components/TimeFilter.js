import React, { useState } from 'react'
import Times from './Times'
import Checkbox from '@material-ui/core/Checkbox';
import { Switch } from '@material-ui/core';



function TimeFilter(){

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
    const TimeList = Times.map((time,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{time}</span>
            </div>
         );
    }
    )
    let TimeList2 = TimeList.splice(0,TimeList.length/2)
    return(
        <div className='seemorebtn'>
        <div>{TimeList2}</div>
        {showText && <div>{TimeList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button>
        </div>
    )
    
       
}
export default TimeFilter;