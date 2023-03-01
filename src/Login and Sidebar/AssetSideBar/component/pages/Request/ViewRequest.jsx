import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewRequest() {
  const [cate,setCate]=useState({})
  const {requestNO}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateRequest/${requestNO}`).then((resp)=>setCate({...resp.data[0]}))
  },[requestNO])
  return (
    <div className='r12'>
    <div  className='r14'>
    <div className="tit"> 
          user detail
        </div>
      
      
      
          <div className='r15'> 
          <strong >requestNO:</strong>
          <span>{cate.requestNO}</span>
          
           <strong >requesterID:</strong>
          <span>{cate.requesterID}</span>
           
           <strong >quantity:</strong>
          <span>{cate.quantity}</span>
          
           <strong >unit:</strong>
          <span>{cate.unit}</span>
           
           <strong >price:</strong>
          <span>{cate.price}</span>
          
           <strong >approvedby:</strong>
          <span>{cate.approvedby}</span>
          
           <strong >recievedby:</strong>
          <span>{cate.recievedby}</span>
           
           <strong >productID:</strong>
          <span>{cate.productID}</span>
          
           </div>
        
      </div>
      <Link to="../request">
           <button className="r16">Go Back</button>
           </Link>
    </div>
  
  )
  
}

export default ViewRequest