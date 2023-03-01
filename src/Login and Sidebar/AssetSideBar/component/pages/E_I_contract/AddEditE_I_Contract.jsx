import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const initialstate={
  employee_name:"",
     Purpose:"",
     asset_status:"",
       dateofcontract:"", 
       assetID:"", 
       product_quantity:"",
       unit:"",
       requestNo:""
}
function AddEditE_I_Contract() {
  const [state,setState]=useState(initialstate)
  const{employee_name, Purpose, asset_status, dateofcontract, assetID,product_quantity,unit, requestNo}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  const {emp_itemID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateemp_item/${emp_itemID}`).then((resp)=>setState({...resp.data[0]}))
  },[emp_itemID])
  const onSubmit=(e)=>{
   
   
    if(!employee_name||!Purpose||!asset_status||!dateofcontract||!product_quantity||!unit||!requestNo){
      alert("please provide the value for each input field");
    }else{
      if(!emp_itemID){
        axios.post("http://localhost:5000/postemp_item",{
          employee_name,  Purpose, asset_status, dateofcontract, assetID,product_quantity, unit, requestNo
        }).then(()=>{
          setState({employee_name:"" ,Purpose:"",asset_status:"",dateofcontract:"",assetID:"",product_quantity:'',unit:'',requestNo:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateemp_item/${emp_itemID}`,{
          
        employee_name,  Purpose, asset_status, dateofcontract, assetID ,product_quantity,unit,requestNo,
        }).then(()=>{
          setState({employee_name:'',Purpose:"",asset_status:"",dateofcontract:"",assetID:"",product_quantity:'',unit:'',requestNo:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../emp_item")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const data=["New","Used"]
  return (
    <div className='E5'>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='EEE6'>
        <label className='E11'  htmlFor="employee_name">employee_name</label>
<input  className='E7' type="text" id="employee_name" name="employee_name" placeholder='employee_name...' value={employee_name||""} onChange={handleInputChange}/>
<label className='E11'  htmlFor="Purpose">Purpose</label>
<input  className='E7' type="text" id="Purpose" name="Purpose" placeholder='Purpose...' value={Purpose||""} onChange={handleInputChange}/>
<label  className='E11' htmlFor="asset_status">asset_status</label>
<input list='data'  className='E7' type="text" id="asset_status" name="asset_status" placeholder='asset_status...' value={asset_status||""} onChange={handleInputChange}/>
<datalist id='data'>
  {data.map((op)=><option>{op}</option>)}
</datalist>
<label  className='E11' htmlFor="dateofcontract">dateofcontract</label>
<input   className='E7' type="date" id="dateofcontract" name="dateofcontract" placeholder='dateofcontract...' value={dateofcontract||""} onChange={handleInputChange}/>
<label  className='E11'  htmlFor="assetID">assetID</label>
<input  className='E7' type="text" id="assetID" name="assetID" placeholder='assetID...' value={assetID||""} onChange={handleInputChange}/>
<label  className='E11' htmlFor="product_quantity">product_quantity</label>
<input   className='E7' type="number" id="product_quantity" name="product_quantity" {...register("product_quantity", {
    min: 0,
    
  })} placeholder='product_quantity...' value={product_quantity||""} onChange={handleInputChange}/>
   {errors.product_quantity && errors.product_quantity.type === "min" && (
        <span className='color' role="alert">number must be posetive or zero</span>
      )}
<label  className='E11' htmlFor="unit">unit</label>
<input   className='E7' type="text" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label  className='E11' htmlFor="requestNo">requestNo</label>
<input  className='E7' type="number" id="requestNo" name="requestNo" placeholder='requestNo...' value={requestNo||""} onChange={handleInputChange}/>

</div>

<div className='E8' >
     <input className="E10" type="submit" value={emp_itemID ? "update":"save"}   />
     <Link to="../emp_item">
      <button className='E9'>Go Back</button>
     </Link>

     </div>

      </form>

    </div>
  )
}

export default AddEditE_I_Contract