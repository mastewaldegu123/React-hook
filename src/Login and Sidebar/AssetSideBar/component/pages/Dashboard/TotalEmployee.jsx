import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import "./dashboard.css"

function TotalEmployee() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/totalemploye",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
   
  return (
    <div> 
    
    <div   > 
    
     
<table  className='cardd'>


   <thead >
    <tr >
    
       <th  style={{textAlign:"center"}}><PeopleOutlineIcon/>TotalEmployee</th> 
       
    </tr>
    </thead> 
    <tbody  >
        {data.map((item,index)=>{
            return(
                
                <tr  key={item.employeeID}>
                   
                   
                    <td >{item.totalemployee}</td>
                

                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
    </div>
  )
  
}

export default TotalEmployee