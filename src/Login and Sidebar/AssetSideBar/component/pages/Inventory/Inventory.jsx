import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./inventory.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Inventory() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getinventoryy?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteInventory=(inventoryID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteinventory/${inventoryID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
   
  return (
    <div> 
    <div className='class2' >
       
       
        <div>
    <input  className='scshd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"addinventory"} >
     <button  className='i3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='i1' >


   <thead className='i'>
    <tr>
    <th className='i4' style={{textAlign:"center"}}>No</th> 
       <th className='i4' style={{textAlign:"center"}}>serialno</th> 
       <th className='i4' style={{textAlign:"center"}}>quantity</th> 
       <th className='i4' style={{textAlign:"center"}}>unit</th> 
       <th className='i4' style={{textAlign:"center"}}>inventory_priceinethbirr_per_unit</th> 
       <th className='i4' style={{textAlign:"center"}}>available_in_store</th> 
       
       <th className='iz' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='i2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.inventoryID}>
                   
                    <th className='i4' scope='row'>{index + 1}</th>
                   
                    <td className='i4'>{item.serialno}</td>
                    <td className='i4'>{item.quantity}</td>
                    <td className='i4'>{item.unit}</td>
                    <td className='i4'>{item.inventory_priceinethbirr_per_unit}</td>
                    <td className='i4'>{item.available_in_store}</td>
                   
                    <td  className='iz'>
                   
                        <Link to={`updateinventory/${item.inventoryID}`}>
                        <button className='i0' > <CiEdit/></button>
                        </Link>
                        <button className='i0' onClick={()=>deleteInventory(item.inventoryID)}><MdDeleteOutline/></button>
                        <Link to={`viewinventory/${item.inventoryID}`}>
                        <button  className='i0'><GrView/> </button>
                        </Link>
                    </td>
                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
</div>
    </div>
  )
  
}

export default Inventory