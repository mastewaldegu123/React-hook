import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const initialstate={
  
  empfname:"",
   emplname:"",
    gender:"",
     emp_Email:"",
      phone:"",
      salaryinethbirr:"",
        dateofhire:"",
         postion:"",
          tittle:"", 
          ManagerID:"",
           departmentID:""
}
function AddEditEmployee() {
  const [state,setState]=useState(initialstate)
  const{empfname, emplname, gender, emp_Email, phone, salaryinethbirr, dateofhire, postion, tittle, 
    ManagerID, departmentID}=state
    const { register, handleSubmit, formState: { errors } } = useForm();
 
  const navigate=useNavigate()
  const {employeeID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemployee/${employeeID}`).then((resp)=>setState({...resp.data[0]}))
  },[employeeID])
  const onSubmit=(e)=>{
    
    
    if(!empfname||!emplname||!gender||!emp_Email||!phone||!salaryinethbirr||!dateofhire||!postion||!tittle||!ManagerID||!departmentID){
      alert("please provide the value for each input field");
    }else{
      if(!employeeID){
        axios.post("http://localhost:5000/postemployee",{
        empfname, emplname, gender, emp_Email, phone, salaryinethbirr, dateofhire, postion, tittle, 
          ManagerID, departmentID
        }).then(()=>{
          setState({empfname:"",emplname:"",gender:"",emp_Email:"",phone:"",salaryinethbirr:"",dateofhire:"",postion:"",tittle:"",ManagerID:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateemployee/${employeeID}`,{
          
         empfname, emplname, gender, emp_Email, phone, salaryinethbirr, dateofhire, postion, tittle, 
        ManagerID, departmentID
        }).then(()=>{
          setState({empfname:"",emplname:"",gender:"",emp_Email:"",phone:"",salaryinethbirr:"",dateofhire:"",postion:"",tittle:"",ManagerID:"",departmentID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        }
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const goback=()=>{
    navigate("../employee")
  }
  return (
    <div className='e5'>
      <form 
      className='neww'
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='e6'>
<label  className='e11' htmlFor="empfname">empfname</label>
<input className='e7'type="text" id="empfname" name="empfname" placeholder='empfname ...' value={empfname||""} onChange={handleInputChange}/>
<label  className='e11' htmlFor="emplname">emplname</label>
<input className='e7'type="text" id="emplname" name="emplname" placeholder='emplname...' value={emplname||""} onChange={handleInputChange}/>
<label className='e11' htmlFor="gender">gender</label>
<input className="e7" type="text" id="gender" name="gender" placeholder='gender...' value={gender||""} onChange={handleInputChange}/>
<label className='e11' htmlFor="emp_Email">emp_Email</label>
<input className="e7" type="email" id="emp_Email" name="emp_Email" placeholder='emp_Email...' {...register("emp_Email", 
                        { 
                            
                            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
                        })} value={emp_Email||""} onChange={handleInputChange}/>
                        {errors.email && <p>Please check the Email</p>}
<label  className='e11' htmlFor="phone">phone</label>
<input className="e7" type="phone" id="phone" name="phone" placeholder='phone...'  value={phone||""} onChange={handleInputChange}/>
<label className='e11' htmlFor="salaryinethbirr">salaryinethbirr</label>
<input className="e7" type="number" id="salaryinethbirr" name="salaryinethbirr" placeholder='salaryinethbirr...' value={salaryinethbirr||""} onChange={handleInputChange}/>
<label className='e11'  htmlFor="dateofhire">dateofhire</label>
<input className="e7" type="date" id="dateofhire" name="dateofhire" placeholder='dateofhire...' value={dateofhire||""} onChange={handleInputChange}/>
<label className='e11' htmlFor="postion">postion</label>
<input className="e7" type="text" id="postion" name="postion" placeholder='postion...' value={postion||""} onChange={handleInputChange}/>
<label className='e11' htmlFor="tittle">tittle</label>
<input className="e7" type="text" id="tittle" name="tittle" placeholder='tittle...' value={tittle||""} onChange={handleInputChange}/>
<label className='e11'  htmlFor="ManagerID">ManagerID</label>
<input className="e7" type="number" id="ManagerID" name="ManagerID" placeholder='ManagerID...' value={ManagerID||""} onChange={handleInputChange}/>
<label className='e11'htmlFor="departmentID">departmentID</label>
<input className="e7" type="number" id="departmentID" name="departmentID" placeholder='departmentID...' value={departmentID||""} onChange={handleInputChange}/>
</div>

<div className='e8' >
     <input className='e10' type="submit" value={employeeID ? "update":"save"}   />
    
      <button className='e9' onClick={goback}>Go Back</button>
     

     </div>

      </form>

    </div>
  )
}

export default AddEditEmployee