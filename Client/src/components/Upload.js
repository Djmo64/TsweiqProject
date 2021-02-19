import ImageCropper from './imagecropper'
import React, {useState, useContext} from 'react'
import { PicContext, UserContext } from './CartContext';
import axios from 'axios';
import camera from "../icons/camera.svg"




export function Upload(){
  const [file, setFile] = useState(null);
  const [upload, setUpload] = useState(false);
  const [selectedfile, setselectedfile] =useContext(PicContext) ;
  
  

  const changeUpload = () => {
   

  }

  function handleChange(e){
    setFile(URL.createObjectURL(e.target.files[0]));
    setselectedfile(e.target.files[0]);
    
  
  }
  const  SendData =  (e) =>{
   e.preventDefault()
   
 const formData = new FormData();
    formData.append('file',selectedfile);
    console.log(formData);
    axios({
      method: 'POST',
      withCredentials: true,
      data: formData,
      url: "http://localhost:8080/api/upload"
  })
  
  .then((res) =>  {
      console.log(res);
    })
    .catch((err) => {
      console.log("Something went Wrong with file upload" + err);
    })
  }

    return (
      <div className='upload-container'>
        
        {file === null?  <div className='upload'>
         <form className='formcontainer' action='#'>
             
        <label className="custom-file-upload">
        <input type="file" id="file" accept=".png" onChange={handleChange}/>
          <img className={file != null? 'imagecontainer': null} src={file != null? file: camera }/>
        </label>
        <span><b>+</b></span>
      </form> 
        </div> :  <div><label>
        
        {upload === false?<ImageCropper className='imgprev' src={file}/>:<img onClick={()=> {setUpload(false); setFile(null)}} className='imgprev' src={file}/>}
       </label>
       {upload === false?<button onClick={()=>setUpload(true)}  className='cropbtn'>Crop</button>: null}
       </div>
      
       }
    
   
      </div>
    );
  
}
