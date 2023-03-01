import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import "./vendor.css"
import { useForm } from "react-hook-form";

const initialstate={
   
  vendorname:"",
  contactperson_name:"",
  phone:"",
  email:""
}
function AddEditVendor() {
  
  const [state,setState]=useState(initialstate)
  const{ vendorname, contactperson_name, phone, email}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  
  const {vendorID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatevendor/${vendorID}`).then((resp)=>setState({...resp.data[0]}))
  },[vendorID])
  const onSubmit=(e)=>{
   
    
    
    if(!vendorname||!contactperson_name||!phone||!email){
      alert("please provide the value for each input field");
    }else{
      if(!vendorID){
        axios.post("http://localhost:5000/postvendor",{
             vendorname, contactperson_name, phone, email
        }).then(()=>{
          setState({vendorname:"",contactperson_name:"",phone:"",emial:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatevendor/${vendorID}`,{
          
         vendorname, contactperson_name, phone, email
        }).then(()=>{
          setState({vendorname:"",contactperson_name:"",phone:"",email:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../vendor")
        },500)

      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const goback=()=>{
    navigate("../vendor")
  }
  
  return (
    <div className='v5' >
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='v6'>
<label className='v7' htmlFor="vendorname">VenodrName</label>
<input className='v11' type="text" id="vendorname" name="vendorname" placeholder='vendorname ...' value={vendorname||""} onChange={handleInputChange}/>
<label className='v7'htmlFor="contactperson_name">Contact Person Name</label>
<input className='v11' type="text" id="contactperson_name" name="contactperson_name" placeholder='contactperson_name...' value={contactperson_name||""} onChange={handleInputChange}/>
<label className='v7' htmlFor="phone">Phone</label>
<input className='v11' type="number" id="phone" name="phone" placeholder='phone...' value={phone||""} onChange={handleInputChange}/>
<label className='v7' htmlFor="email">Email</label>
<input className='v11' type="email" id="email" name="email" {...register('email', {
        required: 'Email is required',
        pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        },
    })} placeholder='email...'     value={email||""} onChange={handleInputChange}/>
                        
</div>

<div className='v8' >
     <input  className="v10" type="submit" value={vendorID ? "update":"save"}   />
     
      <button className='v9' onClick={goback} >Go Back</button>
    

     </div>

      </form>

    </div>
  )
}

export default AddEditVendor