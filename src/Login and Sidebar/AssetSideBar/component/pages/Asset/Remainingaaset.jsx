import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link ,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "./asset.css"
import Productname from '../Dashboard/Productname'
function  Remainingaaset() {

    const[data,setData]=useState([])
    const navigate =useNavigate()
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/remainingasset",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const goback=()=>{
        navigate("/mainpage/asset")
    }
  return (
    <div className=''> 
    
    <div  className='neeee' > 
   <div>
     
<table className='a1' >


   <thead className='a'>
    <tr >
    
    <th className='a4' style={{textAlign:"center"}}>No</th> 
       <th className='a4' style={{textAlign:"center"}}>assetID</th> 
       <th className='a4' style={{textAlign:"center"}}>qunatity</th> 
       <th className='a4' style={{textAlign:"center"}}>unit</th> 
       <th  className='a4' style={{textAlign:"center"}}>product_quantity</th> 
       <th  className='a4' style={{textAlign:"center"}}>remaining</th> 
      
    </tr>
    </thead> 
    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
                
                <tr className='a4' key={item.assetID}>
                
                    <th className='a4' scope='row'>{index + 1}</th>
                    
                    <td className='a4'>{item.assetID}</td>
                    <td className='a4'>{item.qunatity}</td>
                    <td className='a4'>{item.unit}</td>
                    <td className='a4'>{item.product_quantity}</td>
                    <td className='a4'>{item.remaining}</td>
                  

                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
<div><Productname/></div>
</div>
<>
<button onClick={goback}>go back</button>

</>
    </div>
  )
  
}

export default Remainingaaset