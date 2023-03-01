import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewProduct() {
  const [pro,setPro]=useState({})
  const {productID}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateproduct/${productID}`).then((resp)=>setPro({...resp.data[0]}))
  },[productID])
  const goback=()=>{
    navigate("../product")
  }
  return (
    <div className='p12'>
    
   
      <div className="p14">
      
      <div className="tit"> 
          user detail
        </div>
          <div className='p15'>
          <strong >productID:</strong>
          <span>{pro.productID}</span>
          
           <strong >ProductName:</strong>
          <span>{pro.productname}</span>
          
           <strong >product desciption:</strong>
          <span>{pro.product_description}</span>
         
           <strong >CategoryID:</strong>
          <span>{pro.categoryID}</span>
          
           </div>
           
        
      </div>
     
           <button className="p16" onClick={goback}>Go Back</button>
        
    </div>
    
  )
  
}

export default ViewProduct