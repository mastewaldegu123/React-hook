import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useParams,Link, useNavigate } from 'react-router-dom'

 
function  ViewCategory() {
  const [cate,setCate]=useState({})
  const {categoryID}=useParams()
  const navigate=useNavigate()
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatecategory/${categoryID}`).then((resp)=>setCate({...resp.data[0]}))
  },[categoryID])
  const goback=()=>{
    navigate("../category")
  }
  return (
    <div className='c12'>
    <div  className='c14'>
    <div className="tit"> 
          user detail
        </div>
      
      
      
          <div className='c15'>
          <strong >categoryID:</strong>
          <span>{cate.categoryID}</span>
           
           <strong >CategoryName:</strong>
          <span>{cate.categoryname}</span>
           
           <strong >List OF product:</strong>
          <span>{cate.listofproduct}</span>
           
           <strong >Category description:</strong>
          <span>{cate.category_description}</span>
          
           </div>
           
        
      </div>
      
           <button className="c16" onClick={goback}>Go Back</button>
       
    </div>
    
  )
  
}

export default ViewCategory