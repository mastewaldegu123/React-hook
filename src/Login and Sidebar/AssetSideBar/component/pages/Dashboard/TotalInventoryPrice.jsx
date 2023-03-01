import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import InventoryIcon from '@mui/icons-material/Inventory';
import "../Asset/asset.css"

function TotalInentoryPrice() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/totalinventoryprice",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
   
  return (
    <div> 
    
    <div  > 
    
     
<table className='carddd' >


   <thead >
    <tr className='dassh'>
    
      <InventoryIcon/> <th  style={{textAlign:"center"}}>

        </th>        
         <h6>TotalInventory
                  <br/>
            Price</h6>

       
    </tr>
    </thead> 
    <tbody  >
        {data.map((item,index)=>{
            return(
                
                <tr key={item.inventoryID}>
                   
                   
                    <td >{item.total_inventory_cost}</td>
                

                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
    </div>
  )
  
}

export default TotalInentoryPrice