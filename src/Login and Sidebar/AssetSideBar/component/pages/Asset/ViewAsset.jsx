import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewAsset() {
  const [cate,setCate]=useState({})
  const {assetID}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset/${assetID}`).then((resp)=>setCate({...resp.data[0]}))
  },[assetID])
  const goback=()=>{
    navigate("../Asset")
  }
  return (
    <div className='a12'>
    
   
      <div className="a14">
      <div className="tit"> 
          user detail
        </div>
      
          <div className='a15'>
          <strong >seralNO:</strong>
          <span>{cate.seralNO}</span>
           
           <strong >quantity:</strong>
          <span>{cate.quantity}</span>
           
           <strong >unit:</strong>
          <span>{cate.unit}</span>
           
           <strong >asset_Priceinethbirr_perUnit:</strong>
          <span>{cate.asset_Priceinethbirr_perUnit}</span>
          
           <strong >available_in_store:</strong>
          <span>{cate.available_in_store}</span>
           
           
           <strong >productID:</strong>
          <span>{cate.productID}</span>
           
           
           <strong >supplyID:</strong>
          <span>{cate.supplyID}</span>

          <strong >remaining_quantity:</strong>
          <span>{cate.remaining_quantity}</span>
          
           
           </div>
           
        
      </div>
     
           <button className="a16" onClick={goback}>Go Back</button>
       
    </div>
  
  )
  
}

export default ViewAsset