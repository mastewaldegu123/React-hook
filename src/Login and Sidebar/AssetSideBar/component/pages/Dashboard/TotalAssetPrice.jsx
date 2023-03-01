import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import "./dashboard.css"

function TotalAssetPrice() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/addassetprice",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
   
  return (
    <div> 
    
    <div  > 
    
     
<table className='card1' >


   <thead >
  
    <tr className='da' >
    
       <th  style={{textAlign:"center"}}><AttachMoneyIcon/> </th> 
       <h6>TotalAssetPrice</h6>
       
    </tr>
    </thead> 
    <tbody  >
        {data.map((item,index)=>{
            return(
                
                <tr  key={item.assetID}>
                   
                   
                    <td >{item.total_asset_cost}</td>
                

                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
    </div>
  )
  
}

export default TotalAssetPrice