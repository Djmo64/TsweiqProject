import React from "react";
import { useForm } from "react-hook-form";
import SearchData from "../industries.json";
import Title from "antd/lib/skeleton/Title";
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';


function ContactForm() {
  const { register, handleSubmit, errors, getValues } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const categories = [
    "TV",
    "Cinema",
    "Radio",
    "Print",
    "Out Of Home",
    "Digital",
    "Production",
  ];

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
  const uniqueIndustryData = getUnique(SearchData, "Industry");
  let chosenFile = "File not chosen";
  const search = categories.map((SearchResult, index) => {
    return SearchResult;
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="name-section">
        <div className="fName">
          <p><b>First Name*</b></p>
        <input
          type="text"
          
          name="firstName"
          ref={register({ required: true })}
        />
        </div>
        <div className="lName">
          <p><b>Last Name*</b></p>
        <input
          type={Text}
          
          name="lastName"
          ref={register({ required: true })}
        /></div>
      </div>
      <div className="Business-section">
        <p><b>Business Email (Privacy Policy)*</b></p>
        <input
          type={Text}
          
          name="businessEmail"
          ref={register({ required: true })}
        />
      </div>
      <div className="Company-section">
        <p><b>Company*</b></p>
        <input
          type={Text}
          
          name="company"
          ref={register({ required: true })}
        />
      </div>
      <div className="uniqueSections">
        <div className="select-section">
          <div className="textanddrop">
          <p><b>Type of Merchant*</b></p>
          <div className="Title" >
             <Autocomplete
        multiple
        id="tags-outlined"
        options={search}
        style={{ width: "100%", height: "50px", overflow: "hidden", "overflow-y": "scroll" }}
        filterSelectedOptions = {false}
        renderInput={(params) => (
          <TextField
            {...params}
            />
        )}
      />
            
          </div>
          </div>
        <div className="Company-section">
        <p><b>If other, please specify below</b></p>
        <input
          type={Text}
          
          name="OtherMerchant"
          ref={register({ required: false })}
        />
      </div>
        </div>
        
        <p><b>Attach Rate card*</b></p>
        <div className="file-upload">
          <button>Upload</button>
          {chosenFile}
        </div>
        <p><b>Would you like to subscribe to our Customer Experience blog?</b></p>
        <div className="yesOrNo">
          <div className="radio">
            <label>
            <input name="Subscribe" type="radio" value="Yes" ref={register({ required: true })}/>
              Yes
            </label>
          </div>
          <div className="radio">
            <label>
            <input name="Subscribe" type="radio" value="No" ref={register({ required: true })}/>
              No
            </label>
          </div>
        </div>
        <input className="submit-btn" placeholder="Send Message" type="Submit"/>
      </div>
    </form>
  );
}
export default ContactForm;
