import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  project_name:'',
   inventory_type:'', 
   date_recieved:'', 
   inventoryID:'', 
   requestNo:'',
   departmentID:''
  
}
function AddEditEmployee_Inventory() {
  const [state,setState]=useState(initialstate)
  const{ project_name, inventory_type, date_recieved, inventoryID, requestNo,departmentID}=state
 
  const navigate=useNavigate()
  const {emp_invID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemployee_inventory/${emp_invID}`).then((resp)=>setState({...resp.data[0]}))
  },[emp_invID])
  const handleSubmit=(e)=>{
    e.preventDefault();
   
    if(!project_name||!inventory_type||!date_recieved||!inventoryID||!requestNo||!departmentID){
      alert("please provide the value for each input field");
    }else{
      if(!emp_invID){
        axios.post("http://localhost:5000/postemployee_inventory",{
          project_name, inventory_type, date_recieved, inventoryID, requestNo,departmentID
        }).then(()=>{
          setState({project_name:"",inventory_type:"",date_recieved:"",inventoryID:"",requestNo:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
          
      }else{
        axios.put(`http://localhost:5000/updateemployee_inventory/${emp_invID}`,{
         project_name, inventory_type, date_recieved, requestNo, inventoryID, departmentID
       
        }).then(()=>{
          setState({project_name:"",inventory_type:"",date_recieved:"",inventoryID:"",requestNo:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../employee_inventory")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  return (
    <div className='II5' >
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='II6'>
<label className='II11' htmlFor="project_name">project_name</label>
<input className='II7' type="text" id="project_name" name="project_name" placeholder='project_name ...' value={project_name||""} onChange={handleInputChange}/>
<label className='II11'htmlFor="inventory_type">inventory_type</label>
<input className='II7' type="text" id="inventory_type" name="inventory_type" placeholder='inventory_type...' value={inventory_type||""} onChange={handleInputChange}/>
<label className='II11' htmlFor="date_recieved">date_recieved</label>
<input className='II7' type="date" id="date_recieved" name="date_recieved" placeholder='date_recieved...' value={date_recieved||""} onChange={handleInputChange}/>
<label className='II11' htmlFor="inventoryID">inventoryID</label>
<input className='II7' type="number" id="inventoryID" name="inventoryID" placeholder='inventoryID...' value={inventoryID||""} onChange={handleInputChange}/>
<label className='II11' htmlFor="requestNo">requestNo</label>
<input className='II7' type="number" id="requestNo" name="requestNo" placeholder='requestNo...' value={requestNo||""} onChange={handleInputChange}/>
<label className='II11' htmlFor="departmentID">departmentID</label>
<input className='II7' type="number" id="departmentID" name="departmentID" placeholder='departmentID...' value={departmentID||""} onChange={handleInputChange}/>
</div>

<div className='II8' >
     <input  className="II10"type="submit" value={emp_invID ? "update":"save"}   />
     <Link to="../employee_inventory"> 
      <button className='II9'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditEmployee_Inventory