import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link ,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "../Asset/asset.css"
function EmpPerDepartment() {

    const[data,setData]=useState([])
    const navigate =useNavigate()
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/employeeperdepartment",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const goback=()=>{
        navigate("../")
    }
  return (
    <div> 
    
    <div  > 
   
     
<table className='a111' >


   <thead className='a'>
    <tr >
    <th className='a4' style={{textAlign:"center"}}>No</th> 
       <th className='a4' style={{textAlign:"center"}}>department_name</th> 
       <th className='a4' style={{textAlign:"center"}}>employee_per_department</th> 
      
      
    </tr>
    </thead> 
    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
                
                <tr className='a4' key={item.departmentID}>
              
                    <th className='a4' scope='row'>{index + 1}</th>
                    <td className='a4'>{item.department_name}</td>
                    <td className='a4'>{item.employee_per_department}</td>
                  
                  

                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
<>


</>
    </div>
  )
  
}

export default EmpPerDepartment 