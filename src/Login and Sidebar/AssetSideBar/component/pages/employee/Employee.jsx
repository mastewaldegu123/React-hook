import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./Employee.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Employee() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getemployee?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteEmployee=(employeeID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteemployee/${employeeID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
  return (
    <div> 
    <div className='class4' >
        
      
        <div>
    <input  className='sarchd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div > 
    <Link to={"addemployee"} >
     <button  className='e3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='e1' >


   <thead className='e'>
    <tr>
    <th className='e4' style={{textAlign:"center"}}>No</th> 
       <th className='e4'  style={{textAlign:"center"}}>empfname</th> 
       <th className='e4' style={{textAlign:"center"}}>emplname</th>  
       <th className='e4' style={{textAlign:"center"}}> ManagerID</th> 
       <th className='e4' style={{textAlign:"center"}}> departmentID</th> 
       <th className='e4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='e2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.employeeID}>
                   
                    <th className='e4' scope='row'>{index + 1}</th>
                    
                    <td className='e4'>{item.empfname}</td>
                    <td className='e4'>{item.emplname}</td>
                   
                    <td className='e4'>{item.ManagerID}</td>
                    <td className='e4'>{item.departmentID}</td>
                    <td  className='ez'>
                 
                        <Link to={`updateemployee/${item.employeeID}`}>
                        <button className='e0' ><CiEdit/> </button>
                        </Link>
                        <button className='e0' onClick={()=>deleteEmployee(item.employeeID)}><MdDeleteOutline/></button>
                        <Link to={`viewemployee/${item.employeeID}`}>
                        <button  className='e0'><GrView/> </button>
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

export default Employee