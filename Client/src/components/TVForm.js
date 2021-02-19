import React, { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormContext, PragContext } from './FormContext';

// const [inputfields,setintputfields] = useState({})

export default function TVForm() {
  const { register, handleSubmit,control, errors } = useForm();
  const {fields, append, remove } = useFieldArray({control, name: "items"})
  const [forms,setForms] = useContext(FormContext);
  const [prag,setPrag] = useContext(PragContext);

  const addToCart = (data) => {
    const list = data.map((item,index)=>{
       return(
         item
       )
     })
     setForms(list)
     console.log(forms.length);
     console.log(forms);
   }


   const onSubmit = data => {
    const last = data.items[data.items.length - 1];
    console.log(forms)
    forms.length > 0 ? setForms(curr => [...curr, last]) :
    data.items.map((item,index)=>{
      return(
      setForms(curr => [...curr, item])
      )
    })
  }
 
  
 
  
 
  return (
    <div className="form">
      <h2>TV Channel Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      {fields.map(({id}, index)=> {
        return(
          
      <div className='tvform' key={id}>
      <div  className= 'touchpoint1'>
    <input type="text" placeholder="TV Channel Name " name={`items[${index}].TVChannelName`} ref={register} />
    <input type="text" placeholder="Number of Viewers" name={`items[${index}].NumberofViewers`} ref={register} />
    </div>
    <div className= 'touchpoint1'>
        <p>Frequency:</p>
    <select name={`items[${index}].Frequency`} ref={register}>
      <option value="Day">Day</option>
      <option value=" Week"> Week</option>
      <option value=" Bi-Week"> Bi-Week</option>
      <option value=" Month"> Month</option>
      <option value=" 3 Month"> 3 Month</option>
      <option value=" 6 Month"> 6 Month</option>
      <option value=" 1 Year"> 1 Year</option>
    </select>
    <p>Channel Description:</p>
    <textarea name={`items[${index}].ChannelDescription`} ref={register} />
    </div>
    <div className= 'touchpoint1'>
      <p>Language:</p>
    <input type="text" placeholder="Language" name={`items[${index}].Language`} ref={register} />
    <p>Location Aired:</p>
    <input type="text" placeholder="Location Aired" name={`items[${index}].LocationAired`} ref={register} />
    </div>
    <div className= 'touchpoint1'>
        <p>Time Slot:</p>
    <select name={`items[${index}].TimeSlot1`} ref={register}>
    <option value="1:00">1:00</option>
    <option value="1:00">2:00</option>
    <option value="1:00">3:00</option>
    <option value="1:00">4:00</option>
    <option value="1:00">5:00</option>
    <option value="1:00">6:00</option>
    <option value="1:00">7:00</option>
    <option value="1:00">8:00</option>
    <option value="1:00">9:00</option>
    <option value="1:00">10:00</option>
    <option value="1:00">11:00</option>
    <option value="1:00">12:00</option>
    <option value="1:00">13:00</option>
    <option value="1:00">14:00</option>
    <option value="1:00">15:00</option>
    <option value="1:00">16:00</option>
    <option value="1:00">17:00</option>
    <option value="1:00">18:00</option>
    <option value="1:00">19:00</option>
    <option value="1:00">20:00</option>
    <option value="1:00">21:00</option>
    <option value="1:00">22:00</option>
    <option value="1:00">23:00</option>
    <option value="1:00">24:00</option>
    </select>
    <p>Price:</p>
    <select name={`items[${index}].Price`} ref={register}>
    </select>
    <p>Ad Spot:</p>
    <select name={`items[${index}].AdSpot`} ref={register}>
      <option value="15 sec">15 sec</option>
      <option value=" 30 sec"> 30 sec</option>
      <option value=" 60 sec"> 60 sec</option>
      <option value=" 90 sec"> 90 sec</option>
      <option value=" 120 sec"> 120 sec</option>
    </select>
</div>
    </div>
  );})}
    
    <button onClick={()=>append({})}>
      add
    </button>
    <button onClick={handleSubmit}>
      Save
    </button>
    
   </form> 
          
    </div>
  );
}