import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewInventory() {
  const [cate,setCate]=useState({})
  const {inventoryID}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateinventory/${inventoryID}`).then((resp)=>setCate({...resp.data[0]}))
  },[inventoryID])
  const goback=()=>{
    navigate("../Inventory")
  }
  return (
    <div className='i12'>
    
    
      <div className="i14">
      <div className="tit"> 
          user detail
        </div>
      
          <div className='i15'>
          <strong >inventoryID:</strong>
          <span>{cate.inventoryID}</span>
          
           <strong >serialno:</strong>
          <span>{cate.serialno}</span>
          
           <strong >quantity:</strong>
          <span>{cate.quantity}</span>
           
           <strong >unit:</strong>
          <span>{cate.unit}</span>
           
           <strong >inventory_priceinethbirr_per_unit:</strong>
          <span>{cate.inventory_priceinethbirr_per_unit}</span>
          
           <strong >available_in_store:</strong>
          <span>{cate.available_in_store}</span>
          
           <strong >productID:</strong>
          <span>{cate.productID}</span>
           
           <strong >supplyID:</strong>
          <span>{cate.supplyID}</span>
           
           </div>
           
        
      </div>
      
           <button className="i16" onClick={goback}>Go Back</button>
        
    </div>
    
  )
  
}

export default ViewInventory