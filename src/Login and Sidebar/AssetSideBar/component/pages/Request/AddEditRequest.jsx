import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const initialstate={
  
   requesterID:"", 
   quantity:"", 
   unit:"",
   priceinethbirr:"", 
    approvedby:"", 
    recievedby:"", 
    productID:"",
    requester_name:''
  
}
function AddEditCategory() {
  const [state,setState]=useState(initialstate)
  const{ requesterID, quantity, unit, priceinethbirr, approvedby, recievedby, productID,requester_name}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  const {requestNO}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateRequest/${requestNO}`).then((resp)=>setState({...resp.data[0]}))
  },[requestNO])
  const onSubmit=(e)=>{
   
    
    if(!requesterID||!quantity||!unit||!priceinethbirr||!approvedby||!recievedby||!productID||!requester_name){
      alert("please provide the value for each input field");
    }else{
      if(!requestNO){
        axios.post("http://localhost:5000/postrequest",{
           requesterID, quantity, unit, priceinethbirr, approvedby, recievedby, productID,requester_name
        }).then(()=>{
          setState({requesterID:"",quantity:"",unit:"",priceinethbirr:"",approvedby:"",recievedby:"",productID:"",requester_name:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updaterequest/${requestNO}`,{
          
        requesterID, quantity, unit, priceinethbirr, approvedby, recievedby, productID,requester_name
        }).then(()=>{
          setState({requesterID:"",quantity:"",unit:"",priceinethbirr:"",approvedby:"",recievedby:"",productID:"",requester_name:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("/mainpage/request")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  return (
    <div className='r5'>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
          maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='rrr6'>
          
<label className='r11' htmlFor="requesterID">requesterID</label>
<input className='r7' type="number" id="requesterID" name="requesterID" placeholder='requesterID ...' value={requesterID||""} onChange={handleInputChange}/>
<label className='r11' htmlFor="quantity">quantity</label>
<input className='r7' type="number" id="quantity" name="quantity" {...register("quantity", {
    min: 0,
    
  })} placeholder='quantity...' value={quantity||""} onChange={handleInputChange}/>
  {errors.quantity && errors.quantity.type === "min" && (
        <span className='color' role="alert">number must be posetive or zero</span>
      )}
<label className='r11' htmlFor="unit">unit</label>
<input className='r7' type="text" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label className='r11' htmlFor="priceinethbirr">priceinethbirr</label>
<input className='r7' type="number" id="priceinethbirr" name="priceinethbirr" placeholder='priceinethbirr...' value={priceinethbirr||""} onChange={handleInputChange}/>
<label className='r11' htmlFor="approvedby">approvedby</label>
<input className='r7' type="number" id="approvedby" name="approvedby" placeholder='approvedby...' value={approvedby||""} onChange={handleInputChange}/>
<label className='r11' htmlFor="recievedby">recievedby</label>
<input className='r7' type="number" id="recievedby" name="recievedby" placeholder='recievedby...' value={recievedby||""} onChange={handleInputChange}/>
<label className='r11'htmlFor="productID">productID</label>
<input className='r7' type="number" id="productID" name="productID" placeholder='productID...' value={productID||""} onChange={handleInputChange}/>
<label className='r11'htmlFor="requester_name">requester_name</label>
<input className='r7' type="text" id="requester_name" name="requester_name" placeholder='requester_name...' value={requester_name||""} onChange={handleInputChange}/>






</div>


<div className='r8' >
     <input className="r10"type="submit" value={requestNO? "update":"save"}   />
     <Link to="../Request">
      <button className='r9'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditCategory