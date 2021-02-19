import React, { useContext, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FormContext, PragContext } from './FormContext';


export default function PrintForm() {
  const { register, handleSubmit,control, errors } = useForm();
  const {fields, append, remove } = useFieldArray({control, name: "items"})
  const [forms,setForms] = useContext(FormContext);
  const [prag,setPrag] = useContext(PragContext);
  
  console.log(errors);
  
  const addToCart = (data) => {
    setForms (data);
    console.log(forms.length);
    console.log(forms[0]);
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
      <h2>Print Form</h2>
  <form onSubmit={handleSubmit(onSubmit)}>
    {fields.map(({id}, index)=> {
        return(
          <div className='tvform' key={id}>
        <div className= 'touchpoint1'>
      <input type="text" placeholder="Publication Name " name={`items[${index}].PublicationName`} ref={register} />
      <input type="text" placeholder="Number of Readers" name={`items[${index}].NumberofReaders`} ref={register} />
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
      <p>Publication Description:</p>
      <textarea name={`items[${index}].PublicationDescription`} ref={register} />
      </div>
      <div className= 'touchpoint1'>
        <p>Language:</p>
      <input type="text" placeholder="Language" name={`items[${index}].Language`} ref={register} />
      <p>Location Aired:</p>
      <input type="text" placeholder="Location of Distribution" name={`items[${index}].Locationdistribution`} ref={register} />
      </div>
      <div className= 'touchpoint1'>
          <p>Placement Type:</p>
      <select name={`items[${index}].placement`} ref={register}>
      <option value="Front Page">Front Page</option>
      <option value="Page 2">Page 2</option>
      <option value="Page 3">Page 3</option>
      <option value="Back Page">Back Page</option>
      </select>
      <p>Price:</p>
      <select name={`items[${index}].Price`} ref={register}>
      </select>
      <p>Size Specs:</p>
      <select name={`items[${index}].AdSize`} ref={register}>
        <option value="15 sec"></option>
        <option value=" 30 sec"> </option>
        <option value=" 60 sec"></option>
        <option value=" 90 sec"> </option>
        <option value=" 120 sec"> </option>
      </select>
</div>
</div>
      
    
        );})}
        </form>
    <button onClick={()=>append({})}>
      add
    </button>
    <button onClick={handleSubmit}>
      Save
    </button>
    </div>
  );
}