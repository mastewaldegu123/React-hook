import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link ,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "../Asset/asset.css"
import Productname from './Productname'
function AvailableProduct() {

    const[data,setData]=useState([])
    const navigate =useNavigate()
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/supplystatus",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const goback=()=>{
        navigate("/mainpage/request")
    }
  return (
    <div> 
    
    <div  > 
   
     
<table className='a1' >


   <thead className='a'>
    <tr >
    <th className='a4' style={{textAlign:"center"}}>No</th>
     
       <th className='a4' style={{textAlign:"center"}}>emp_itemID</th> 
       <th className='a4' style={{textAlign:"center"}}>requestNo</th> 
       <th className='a4' style={{textAlign:"center"}}>dateofcontract</th> 
       <th className='a4' style={{textAlign:"center"}}>assetID</th> 
       <th className='a4' style={{textAlign:"center"}}>asset_status</th>
       <th className='a4' style={{textAlign:"center"}}>quantity</th>
       <th className='a4' style={{textAlign:"center"}}>unit</th>
       <th className='a4' style={{textAlign:"center"}}>product_quantity</th> 
       <th className='a4' style={{textAlign:"center"}}>request_status</th> 
      
      
    </tr>
    </thead> 
    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
                
                <tr className='a4' key={item.assetID}>
               
                    <th className='a4' scope='row'>{index + 1}</th>
                    <td className='a4'>{item.emp_itemID}</td>
                    <td className='a4'>{item.requestNo}</td>
                    <td className='a4'>{item.dateofcontract}</td>
                    <td className='a4'>{item.assetID}</td>
                    <td className='a4'>{item.asset_status}</td>
                    <td className='a4'>{item.quantity}</td>
                    <td className='a4'>{item.unit}</td>
                    <td className='a4'>{item.product_quantity}</td>
                    <td className='a4'>{item.request_status}</td>
                    
                  

                   
                </tr>
                
            )
        })}
    </tbody>
</table>

</div>
<>
<button onClick={goback}>go back</button>

</>
    </div>
  )
  
}

export default AvailableProduct