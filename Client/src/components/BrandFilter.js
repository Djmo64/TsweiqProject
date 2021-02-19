import React, { useState } from 'react'
import TVItems from '../TVItems.json'
import Checkbox from '@material-ui/core/Checkbox';
import Cinemas from '../Cinema.json'
import print from '../Print.json'
import { Switch } from '@material-ui/core';

function getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }
  const uniqueBrandData = getUnique(TVItems, "Title");
  const uniqueBrandData2 = getUnique(Cinemas, "Title");
  const uniqueBrandData3 = getUnique(print, "Title");

export function BrandFilter(){

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
    const BrandList = uniqueBrandData.map((brand,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{brand.Title}</span>
            </div>
         );
    }
    )
    let BrandList2 = BrandList.splice(0,BrandList.length/2)

    return(
        <div className='seemorebtn'>
        <div>{BrandList2}</div>
        {showText && <div>{BrandList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button></div>
    )
    
       
}

export function BrandFilter2(){

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
    const BrandList = uniqueBrandData2.map((brand,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{brand.Title}</span>
            </div>
         );
    }
    )
    let BrandList2 = BrandList.splice(0,BrandList.length/2)

    return(
        <div className='seemorebtn'>
        <div>{BrandList2}</div>
        {showText && <div>{BrandList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button></div>
    )
    
       
}
export function BrandFilter3(){

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
    const BrandList = uniqueBrandData3.map((brand,index) => {
        return ( 
           <div className ="checkboxdiv"> 
        <Switch
        onChange= {()=>handleToggle(index)}
        color="primary"
        inputProps={{ 'aria-label': 'checkbox with default color' }}
      />
            <span id= {index}>{brand.Title}</span>
            </div>
         );
    }
    )
    let BrandList2 = BrandList.splice(0,BrandList.length/2)

    return(
        <div className='seemorebtn'>
        <div>{BrandList2}</div>
        {showText && <div>{BrandList}</div>}
    <button onClick={() => setShowText(!showText)} >see more</button></div>
    )
    
       
}