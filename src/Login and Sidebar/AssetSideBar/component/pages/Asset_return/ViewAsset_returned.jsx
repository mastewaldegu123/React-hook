import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link } from 'react-router-dom'

 
function  ViewAsset_returned() {
  const [cate,setCate]=useState({})
  const {asset_returnedID}=useParams()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset_returned/${asset_returnedID}`).then((resp)=>setCate({...resp.data[0]}))
  },[asset_returnedID])
  return (
    <div className='AA12'>
    <div  className='AA14'>
    <div className="tit"> 
          <p>user detail</p>
        </div>
      <div className="AA15">
      
      
          
          <strong>asset_returnedID:</strong>
          <span>{cate.asset_returnedID}</span>
          
           <strong>Purpose_returned:</strong>
          <span>{cate.Purpose_returned}</span>
          
           <strong>Date_returned:</strong>
          <span>{cate.Date_returned}</span>
          
           <strong>emp_itemID:</strong>
          <span>{cate.emp_itemID}</span>
           
           </div>
           
        
      </div>
      <Link to="/mainpage/asset_returned">
           <button className="AA16">Go Back</button>
           </Link>
    </div>
    
  )
  
}

export default ViewAsset_returned