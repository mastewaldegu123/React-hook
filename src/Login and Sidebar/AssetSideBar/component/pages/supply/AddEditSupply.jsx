import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const initialstate={
   POnumber:"", 
   supplying_status:"", 
   supplied_quantity:'',
   Supplyingdate:"",
   unit:'',
   estimated_cost_per_unit:"", 
    vendorID:""
    

}
function AddEditSupply() {
  const [state,setState]=useState(initialstate)
  const{ POnumber, supplying_status,supplied_quantity, Supplyingdate,unit, estimated_cost_per_unit, vendorID}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  const {supplyID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatesupply/${supplyID}`).then((resp)=>setState({...resp.data[0]}))
  },[supplyID])
  const onSubmit=(e)=>{
    
   
    if(! POnumber||! supplying_status||!supplied_quantity||! Supplyingdate ||!unit ||!estimated_cost_per_unit||!vendorID){
      alert("please provide the value for each input field");
    }else{
      if(!supplyID){
        axios.post("http://localhost:5000/postsupply",{
           POnumber, supplying_status,supplied_quantity, Supplyingdate,unit, estimated_cost_per_unit, vendorID
        }).then(()=>{
          setState({POnumber:"",supplying_status:"",supplied_quantity:'',Supplyingdate:"",unit:'',estimated_cost_per_unit:"",vendorID:""})
          console.log({POnumber:"",supplying_status:"",supplied_quantity:'',Supplyingdate:"",unit:'',estimated_cost_per_unit:"",vendorID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatesupply/${supplyID}`,{
          
         POnumber, supplying_status,supplied_quantity, Supplyingdate,unit, estimated_cost_per_unit, vendorID
        }).then(()=>{
          setState({POnumber:"",supplying_status:"",supplied_quantity:'',Supplyingdate:"",unit:'',estimated_cost_per_unit:"",vendorID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../supply")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const data=["purchased"," donate","other"]
  const goback=()=>{
    navigate("../supply")
  }
  return (
    <div className='s5'>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='s6'>
<label  className='s11' htmlFor="POnumber">POnumber</label>
<input  className='s7'type="number" id="POnumber" name="POnumber" placeholder='POnumber ...' value={POnumber||""} onChange={handleInputChange}/>
<label className='s11' htmlFor="supplying_status">supplying_status</label>
<input list="data" className='s7' type="text" id="supplying_status" name="supplying_status" placeholder='supplying_status...' value={supplying_status||""} onChange={handleInputChange}/>
<datalist id='data'>
{data.map((op)=><option>{op}</option>)}

</datalist>
<label  className='s11' htmlFor="supplied_quantity">supplied_quantity</label>
<input className='s7' id="supplied_quantity" name="supplied_quantity" type="number" {...register("supplied_quantity", {
    min: 0,
    
  })}
 placeholder='supplied_quantity...' value={supplied_quantity||""} onChange={handleInputChange}/>
 {errors.supplied_quantity && errors.supplied_quantity.type === "min" && (
        <span className='color' role="alert">number must be posetive or zero</span>
      )}
<label  className='s11' htmlFor="Supplyingdate">Supplyingdate</label>
<input className='s7' type="date" id="Supplyingdate" name="Supplyingdate" placeholder='Supplyingdate...' value={Supplyingdate||""} onChange={handleInputChange}/>
<label  className='s11' htmlFor="unit">unit</label>
<input  className='s7'type="text" id="unit" name="unit" placeholder='unit ...' value={unit||""} onChange={handleInputChange}/>
<label  className='s11' htmlFor="estimated_cost_per_unit">estimated_cost_per_unit</label>
<input  className='s7'type="text" id="estimated_cost_per_unit" name="estimated_cost_per_unit" placeholder='estimated_cost_per_unit ...' value={estimated_cost_per_unit||""} onChange={handleInputChange}/>
<label  className='s11' htmlFor="vendorID">vendorID</label>
<input  className='s7'type="text" id="vendorID" name="vendorID" placeholder='vendorID ...' value={vendorID||""} onChange={handleInputChange}/>

</div>

<div className='s8' >
     <input className='s10' type="submit" value={supplyID ? "update":"save"}   />
    
      <button className='s9' onClick={goback}>Go Back</button>
   

     </div>

      </form>

    </div>
  )
}

export default AddEditSupply