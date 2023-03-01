import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./Department.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Department() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getdepartment?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deletedepartment=(departmentID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletedepartment/${departmentID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
   
  return (
    <div> 
    <div className='class3' >
       
        
        <div>
    <input  className='sarrcchd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"adddepartment"} >
     <button  className='d3' >AddDepartment</button>
     </Link>
     <div id='printablediv' >
<table className='d1' >


   <thead className='d'>
    <tr>
    
    <th className='d4' style={{textAlign:"center"}}>No</th> 
       <th  className='d4' style={{textAlign:"center"}}>department_name</th> 
       <th className='d4'  style={{textAlign:"center"}}>department_role</th> 
       <th className='d4' style={{textAlign:"center"}}>number_ofemployee</th> 
      
       <th className='d4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='d2'>
        {data.map((item,index)=>{
            return(
             
                <tr key={item.departmentID}>
                   
                    <th className='d4' scope='row'>{index + 1}</th>
                    
                    <td className='d4'>{item.department_name}</td>
                    <td className='d4'>{item.department_role}</td>
                    <td className='d4'>{item.number_ofemployee}</td>
                   
                    <td  className='dz'>
                    
                        <Link to={`updatedepartment/${item.departmentID}`}>
                        <button className='d0' ><CiEdit/></button>
                        </Link>
                        <button className='d0' onClick={()=>deletedepartment(item.departmentID)}><MdDeleteOutline/></button>
                        <Link to={`viewdepartment/${item.departmentID}`}>
                        <button  className='d0'><GrView/> </button>
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

export default Department