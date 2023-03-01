import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./supply.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Supply() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getsupplyy?q=${query}`,)
        setData(response.data)
        
    }
    useEffect(()=>{loaddata()},[query])
    const deleteSupply=(supplyID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletesupply/${supplyID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
  return (
    <div> 
    <div className='vend1' >
        
        
        <div>
    <input  className='saasvarch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"addsupply"} >
     <button  className='s3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='s1' >


   <thead className='s'>
    <tr>
   
    <th className='s4' style={{textAlign:"center"}}>No</th> 
       <th className='s4' style={{textAlign:"center"}}>POnumber</th> 
       <th className='s4' style={{textAlign:"center"}}>supplying_status</th>
       <th className='s4' style={{textAlign:"center"}}>supplied_quantity</th> 
       
       
      
       <th className='s4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='s2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.supplyID}>
                   
                    <th className='s4'  scope='row'>{index + 1}</th>
                   
                    <td className='s4'>{item.POnumber}</td>
                    <td className='s4'>{item.supplying_status}</td>
                    <td className='s4'>{item.supplied_quantity}</td>
                    
                    
                   
                    <td  className='sz'>
                    

                        <Link to={`updatesupply/${item.supplyID}`}>
                        <button className='s0' ><CiEdit/></button>
                        </Link>
                        <button className='s0' onClick={()=>deleteSupply(item.supplyID)}> <MdDeleteOutline/> </button>
                        <Link to={`viewsupply/${item.supplyID}`}>
                        <button  className='s0'><GrView/>  </button>
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

export default Supply