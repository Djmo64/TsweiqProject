import React, { useState } from 'react'
import Lang from "../components/Lang"
import OFHPlacement from "../components/OFHPlacement"
import StationFilter from "../components/Stations"
import Checkbox from '@material-ui/core/Checkbox';
import placement from "./placementPrint";
import { Switch } from '@material-ui/core';

 

export function LangFilter(){

    const [Checked, setChecked] = useState([])
   
    

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
    const LangList = Lang.map((lan,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{lan}</span>
            </div>
         );
    }
    )
    

    return(
            <div>{LangList}</div>
    )
    
       
}

export function SubFilter(){
    const subs =['Newspaper', 'Magazine', 'Brochure'];
    const [Checked, setChecked] = useState([])

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
    const subList = subs.map((suh,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{suh}</span>
            </div>
         );
    }
    )

    return(
        <div>{subList}</div>
    )
    
       
}
export function SubFilter2(){
    const subs =['TV Commercial', 'Animation', 'Spokesperson Video', 'Explainer Video'];
    const [Checked, setChecked] = useState([])

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
    const subList = subs.map((suh,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{suh}</span>
            </div>
         );
    }
    )

    return(
        <div>{subList}</div>
    )
    
       
}
export function SubFilter3(){
    const subs =['Collateral', 'Logos', 'Business Card Prints'];
    const [Checked, setChecked] = useState([])

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
    const subList = subs.map((suh,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{suh}</span>
            </div>
         );
    }
    )

    return(
        <div>{subList}</div>
    )
    
       
}
export function GenderFilter(){
    const subs =['Male', 'Female'];
    const [Checked, setChecked] = useState([])

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
    const subList = subs.map((suh,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{suh}</span>
            </div>
         );
    }
    )

    return(
        <div>{subList}</div>
    )
    
       
}
export function PlacementFilter(){

    const [showText, setShowText] = useState(false);
    const [Checked, setChecked] = useState([])

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
    const placeList = placement.map((pla,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{pla}</span>
            </div>
         );
    }
    )

    let placeList2 = placeList.splice(0,placeList.length/2)

    return(
        <div className='seemorebtn'>
        <div>{placeList2}</div>
        {showText && <div>{placeList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button>
    </div>
    )}

    export function PlacementFilter2(){
        const [showText, setShowText] = useState(false);
    const [Checked, setChecked] = useState([])
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

        const placeList = OFHPlacement.map((pla,index) => {
            return ( 
               <div className ="checkboxdiv"> 
            <Switch
            onChange= {()=>handleToggle(index)}
            color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
                <span id= {index}>{pla}</span>
                </div>
             );
        }
        )
        return(
            <di>
                {placeList}
            </di>
        )

    }

    export function StationFilters(){
        const [showText, setShowText] = useState(false);
    const [Checked, setChecked] = useState([])
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

        const placeList = StationFilter.map((pla,index) => {
            return ( 
               <div className ="checkboxdiv"> 
            <Switch
            onChange= {()=>handleToggle(index)}
            color="primary"
            inputProps={{ 'aria-label': 'checkbox with default color' }}
          />
                <span id= {index}>{pla}</span>
                </div>
             );
        }
        )
        return(
            <di>
                {placeList}
            </di>
        )

    }

