import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
   Purpose_returned:"", 
   Date_returned:"",
   Performance_status:"",
   emp_itemID:""
  
}
function AddEditAsset_returned() {
  const [state,setState]=useState(initialstate)
  const{ Purpose_returned, Date_returned,Performance_status, emp_itemID}=state
  
  const navigate=useNavigate()
  const {asset_returnedID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset_returned/${asset_returnedID}`).then((resp)=>setState({...resp.data[0]}))
  },[asset_returnedID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!Purpose_returned||!Date_returned||!Performance_status||!emp_itemID){
      alert("please provide the value for each input field");
    }else{
      if(!asset_returnedID){                                                                                                                                                                                                                       
        axios.post("http://localhost:5000/postasset_returned",{
          asset_returnedID, Purpose_returned, Date_returned,Performance_status, emp_itemID
        }).then(()=>{
          setState({Purpose_returned:"",Date_returned:"",Performance_status:"",emp_itemID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateasset_returned/${asset_returnedID}`,{
          
         Purpose_returned, Date_returned, Performance_status,emp_itemID
        }).then(()=>{
          setState({Purpose_returned:"",Date_returned:"",Performance_status:"",emp_itemID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../asset_returned")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const data=["retired","need maintainance","maintained"]
  return ( 
    <div className='AA5' >
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='AA6'>
<label  className='AA11' htmlFor="Purpose_returned">Purpose_returned</label>
<input  className='AA7' type="text" id="Purpose_returned" name="Purpose_returned" placeholder='Purpose_returned ...' value={Purpose_returned||""} onChange={handleInputChange}/>
<label  className='AA11' htmlFor="Date_returned">Date_returned</label>
<input  className='AA7' type="date" id="Date_returned" name="Date_returned" placeholder='Date_returned...' value={Date_returned||""} onChange={handleInputChange}/>
<label  className='AA11' htmlFor="Performance_status">Performance_status</label>
<input list='data' className='AA7' type="text" id="Performance_status" name="Performance_status" placeholder='Performance_status...' value={Performance_status||""} onChange={handleInputChange}/>
<datalist id='data'>
  {data.map((op)=><option>{op}</option>)}
</datalist>
<label  className='AA11' htmlFor="emp_itemID">emp_itemID</label>
<input  className='AA7' type="number" id="emp_itemID" name="emp_itemID" placeholder='emp_itemID...' value={emp_itemID||""} onChange={handleInputChange}/>
</div>

<div className='AA8' >
     <input className='AA10' type="submit" value={asset_returnedID? "update":"save"}   />
     <Link to="../asset_returned">
      <button className='AA9'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditAsset_returned
