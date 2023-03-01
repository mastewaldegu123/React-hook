import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./E_I_Contract.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'


function E_I_Contract() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getemp_item?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteemp_item=(emp_itemID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteemp_item/${emp_itemID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
   
  return (
    <div> 
    <div className='class8' >
        
        
        <div>
    <input  className='sarrchd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div style={{marginTop: "150px"}} > 
    <Link to={"addemp_item"} >
     <button  className='E3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='E1' >


   <thead className='E'>
    <tr>
    
    <th className='E4' style={{textAlign:"center"}}>No</th> 
    <th className='E4' style={{textAlign:"center"}}>emp_itemID</th>
    <th className='E4' style={{textAlign:"center"}}>employee_name</th>
       <th className='E4' style={{textAlign:"center"}}>Purpose</th> 
       <th className='E4' style={{textAlign:"center"}}>asset_status</th> 
       <th className='E4' style={{textAlign:"center"}}>dateofcontract</th> 
       <th className='E4' style={{textAlign:"center"}}>assetID</th> 
      
       <th className='E4' style={{textAlign:"center"}}>requestNo</th> 
       <th className='E4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='E2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.emp_itemID}>
                   
                    <th className='E4' scope='row'>{index + 1}</th>
                    
                    <td className='E4'>{item.emp_itemID}</td>
                    <td className='E4'>{item.employee_name}</td>
                    <td className='E4'>{item.Purpose}</td>
                    <td className='E4'>{item.asset_status}</td>
                    <td className='E4'>{item.dateofcontract}</td>
                    <td className='E4'>{item.assetID}</td>
                    
                    <td className='E4'>{item.requestNo}</td>

                    <td  className='Ez'>
       
                        <Link to={`updateemp_item/${item.emp_itemID}`}>
                        <button className='E0' ><CiEdit/></button>
                        </Link>
                        <button className='E0' onClick={()=>deleteemp_item(item.emp_itemID)}> <MdDeleteOutline/></button>
                        <Link to={`viewemp_item/${item.emp_itemID}`}>
                        <button  className='E0'><GrView/></button>
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

export default E_I_Contract