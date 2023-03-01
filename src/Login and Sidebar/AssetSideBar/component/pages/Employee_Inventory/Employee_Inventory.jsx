import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./employee_inventory.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Employee_Inventory() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getemployee_inventory?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteEmployee_Inventory=(emp_invID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteemployee_inventory/${emp_invID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
    
  return (
    <div> 
    <div className='class5' >
       
        
        <div>
    <input  className='schd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"addemployee_inventory"} >
     <button  className='II3' >AddEmployee_Inventory</button>
     </Link>
     <div id='printablediv' >
<table className='II1' >
     


   <thead className='II'>
    <tr>
    <th className='II4' style={{textAlign:"center"}}>No</th> 
       <th className='II4' style={{textAlign:"center"}}>project_name</th> 
       <th className='II4' style={{textAlign:"center"}}>inventory_type</th> 
       <th className='II4' style={{textAlign:"center"}}>date_recieved</th> 
       <th className='II4' style={{textAlign:"center"}}>inventoryID</th> 
      
       <th className='II4' style={{textAlign:"center"}}>Action </th> 
    </tr>
    </thead> 
    <tbody  className='II2'>
        {data.map((item,index)=>{
            return(
              
                <tr key={item.emp_invID}>
                   
                    <th className='II4'  scope='row'>{index + 1}</th>
                   
                    <td className='II4'>{item.project_name}</td>
                    <td className='II4'>{item.inventory_type}</td>
                    <td className='II4'>{item.date_recieved}</td>
                    <td className='II4'>{item.inventoryID}</td>
                   
                    <td  className='IIz'>

                        <Link to={`updateemployee_inventory/${item.emp_invID}`}>
                        <button className='II0' ><CiEdit/></button>
                        </Link>
                        <button className='II0' onClick={()=>deleteEmployee_Inventory(item.emp_invID)}><MdDeleteOutline/> </button>
                        <Link to={`viewemployee_inventory/${item.emp_invID}`}>
                        <button  className='II0'><GrView/> </button>
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

export default Employee_Inventory