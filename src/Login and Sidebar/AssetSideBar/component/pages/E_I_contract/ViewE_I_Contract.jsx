import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewE_I_Contract() {
  const [cate,setCate]=useState({})
  const {emp_itemID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemp_item/${emp_itemID}`).then((resp)=>setCate({...resp.data[0]}))
  },[emp_itemID])
  return (
    <div className='E12'>
    
   
      <div className="E14">
      <div className="tit"> 
          user detail
        </div>
      
          <div className='E15'>
          <strong >Purpose:</strong>
          <span>{cate.Purpose}</span>
           
           <strong>asset_status:</strong>
          <span>{cate.asset_type}</span>
          
           <strong >dateofcontract:</strong>
          <span>{cate.dateofcontract}</span>
          
           <strong>assetID:</strong>
          <span>{cate.assetID}</span>
           
           <strong >employeeID:</strong>
          <span>{cate.employeeID}</span>
           
           <strong >requestNo:</strong>
          <span>{cate.requestNo}</span>
         
           </div>
           
        
      </div>
      <Link to="../emp_item">
           <button className="E16">Go Back</button>
           </Link>
    </div>
    
  )
  
}

export default ViewE_I_Contract