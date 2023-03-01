import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewSupply() {
  const [cate,setCate]=useState({})
  const {supplyID}=useParams()
  const navigate =useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatesupply/${supplyID}`).then((resp)=>setCate({...resp.data[0]}))
  },[supplyID])
  const goback=()=>{
    navigate("../supply")
  }
  return (
    <div className='s12'>
    <div className="s14" >
    <div className="tit"> 
          user detail
        </div>
      
        
          <div className='s15'>
          <strong >supplyID:</strong>
          <span>{cate.supplyID}</span>

          <strong >POnumber:</strong>
          <span>{cate.POnumber}</span>

          <strong >supplying_status:</strong>
          <span>{cate.supplying_status}</span>
           <strong >Supplyingdate:</strong>
          <span>{cate.Supplyingdate}</span>

          <strong >supplied_quantity:</strong>
          <span>{cate.supplied_quantity}</span>
          <strong >unit:</strong>
          <span>{cate.unit}</span>
          <strong >estimated_cost_per_unit:</strong>
          <span>{cate.estimated_cost_per_unit}</span>
         
           <strong >vendorID:</strong>
          <span>{cate.vendorID}</span>
           
           </div>
           
        
      </div>
   
           <button className="s16" onClick={goback}>Go Back</button>
         
    </div>
    
  )
  
}

export default ViewSupply