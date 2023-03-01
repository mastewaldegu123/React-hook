import axios from "axios"
import "./dashboard.css"


import React,{useState,useEffect} from 'react'
import TotalAssetPrice from "./TotalAssetPrice"
import TotalEmployee from './TotalEmployee'
import TotalInentoryPrice from './TotalInventoryPrice'


import LineChart from './LineChart'
import Piechart from './Piechart'
import Piechart1 from './Piechart1'
import  {Link ,useNavigate}from "react-router-dom"
import EmpPerDepartment from "./EmpPerDepartment"
function Dashboard() {
  const navigate=useNavigate()
  const[data,setData]=useState([])
 
  const loaddata=async()=>{
      const response=await axios.get("http://localhost:5000/employeeperdepartment",)
      setData(response.data)
  }
  useEffect(()=>{loaddata()},[])
  

const handlethis=()=>{

  navigate('./anualbejetperdepartment')
}
  return (
   
    <React.Fragment>
     
      <div className='card2'>
        <div className='car'>
        <TotalAssetPrice/>
     <TotalEmployee/>
     <TotalInentoryPrice/>
     <div className="empeee"><EmpPerDepartment/></div>
    
    
    <div className="piechart">
     

</div>
  
    </div>


<div  className="charts">
  <Piechart/>
  <Piechart1/>
  
</div>  
        
       
     
    
    
   
      
     
     </div>
    
</React.Fragment>
  )
}

export default Dashboard
