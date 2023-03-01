import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";
const initialstate={
  
   serialno:"", quantity:"", unit:"", inventory_priceinethbirr_per_unit:"", available_in_store:"", productID:"", supplyID:""
}
function AddEditInventory() {
  const [state,setState]=useState(initialstate)
  const{ serialno, quantity, unit, inventory_priceinethbirr_per_unit, available_in_store, productID, supplyID}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  const {inventoryID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateinventory/${inventoryID}`).then((resp)=>setState({...resp.data[0]}))
  },[inventoryID])
  const onSubmit=(e)=>{
    
    
    if(!serialno||!quantity||!unit||!inventory_priceinethbirr_per_unit||!available_in_store||!productID||!supplyID){
      alert("please provide the value for each input field");
    }else{
      if(!inventoryID){
        axios.post("http://localhost:5000/postinventory",{
           serialno, quantity, unit, inventory_priceinethbirr_per_unit, available_in_store, productID, supplyID
        }).then(()=>{
          setState({serialno:"",quantity:"",unit:"",inventory_priceinethbirr_per_unit:"",available_in_store:"",productID:"",supplyID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateinventory/${inventoryID}`,{
          
        serialno, quantity, unit, inventory_priceinethbirr_per_unit, available_in_store, productID, supplyID
        }).then(()=>{
          setState({serialno:"",quantity:"",unit:"",inventory_priceinethbirr_per_unit:"",available_in_store:"",productID:"",supplyID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../inventory")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const data =["yes","no"]
  const goback=()=>{
    navigate("../Inventory")
  }
  return (
    <div className='i5' >
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      >
        <div className='i6'>
<label className='i11' htmlFor="serialno">serialno</label>
<input className='i7' type="number" id="serialno" name="serialno" placeholder='serialno...' value={serialno||""} onChange={handleInputChange}/>
<label className='i11' htmlFor="quantity">quantity</label>
<input className='i7'type="number" id="quantity" name="quantity" {...register("quantity", {
    min: 0,
    
  })} placeholder='quantity...' value={quantity||""} onChange={handleInputChange}/>
  {errors.quantity && errors.quantity.type === "min" && (
        <span className='color' role="alert">number must be posetive or zero</span>
      )}
<label className='i11' htmlFor="unit">unit</label>
<input className='i7'type="text" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label className='i11'htmlFor="inventory_priceinethbirr_per_unit">inventory_priceinethbirr_per_unit</label>
<input className='i7'type="number" id="inventory_priceinethbirr_per_unit" name="inventory_priceinethbirr_per_unit" placeholder='inventory_priceinethbirr_per_unit...' value={inventory_priceinethbirr_per_unit||""} onChange={handleInputChange}/>
<label className='i11'htmlFor="available_in_store">available_in_store</label>
<input list='data' className='i7'type="text" id="available_in_store" name="available_in_store" placeholder='available_in_store...' value={available_in_store||""} onChange={handleInputChange}/>
<datalist id='data'>
  {data.map((op)=><option>{op}</option>)}
</datalist>
<label className='i11'htmlFor="productID">productID</label>
<input className='i7'type="number" id="productID" name="productID" placeholder='productID...' value={productID||""} onChange={handleInputChange}/>
<label className='i11'htmlFor="supplyID">supplyID</label>
<input className='i7'type="number" id="supplyID" name="supplyID" placeholder='supplyID...' value={supplyID||""} onChange={handleInputChange}/>

</div>

<div className='i8' >
     <input className="i10"type="submit" value={inventoryID ? "update":"save"}   />
    
      <button className='i9' onClick={goback}>Go Back</button>
    

     </div>

      </form>

    </div>
  )
}

export default AddEditInventory