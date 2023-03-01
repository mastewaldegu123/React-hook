import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'
import "./vendor.css"
 
function  ViewVendor() {
  const [cate,setCate]=useState({})
  const {vendorID}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatevendor/${vendorID}`).then((resp)=>setCate({...resp.data[0]}))
  },[vendorID])
  const goback=()=>{
    navigate("../vendor")
  }
  return (
    <div className='v12'>
    
   
      <div className="v14">
      
      <div className="tit"> 
          user detail
        </div>
          <div  className='v15'>
          <strong >vendorID:</strong>
          <span  >{cate.vendorID}</span>
          
           <strong >VendorName:</strong>
          <span>{cate.vendorname}</span>
           
           <strong >contactperson_name:</strong>
          <span>{cate.contactperson_name}</span>
          
           <strong >phone:</strong>
          <span>{cate.phone}</span>
          
           <strong >email:</strong>
          <span>{cate.email}</span>
          
           </div>
           
        
      </div>
     
           <button className="v16" onClick={goback}>Go Back</button>
        
    </div>
  
  )
  
}

export default ViewVendor