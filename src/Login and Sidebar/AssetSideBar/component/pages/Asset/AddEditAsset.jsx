import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const initialstate={
   seralNO:"",
   quantity:"", 
    unit:"", 
    asset_Priceinethbirr_perUnit:"", 
    available_in_store:"",
   
      productID:"", 
      supplyID:"",
      remaining_quantity:""
 
}
function AddEditAsset() {
  const [state,setState]=useState(initialstate)
  const{ seralNO, quantity, unit, asset_Priceinethbirr_perUnit, available_in_store,  productID, supplyID,remaining_quantity}=state
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate=useNavigate()
  const {assetID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateasset/${assetID}`).then((resp)=>setState({...resp.data[0]}))
  },[assetID])
  const onSubmit=(e)=>{
    
    
    if(!seralNO||!quantity||!quantity||!unit||!asset_Priceinethbirr_perUnit||!available_in_store||!productID||!supplyID){
      alert("please provide the value for each input field");
    }else{
      if(!assetID){
        axios.post("http://localhost:5000/postasset",{
          seralNO,quantity, unit, asset_Priceinethbirr_perUnit, available_in_store, productID, supplyID,remaining_quantity
        }).then(()=>{
          setState({seralNO:"",quantity:"",unit:"",asset_Priceinethbirr_perUnit:"",available_in_store:"",productID:"",supplyID:"",remaining_quantity:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
         
      }else{
        axios.put(`http://localhost:5000/updateasset/${assetID}`,{
          
        seralNO,quantity, unit, asset_Priceinethbirr_perUnit, available_in_store, productID, supplyID,remaining_quantity
        }).then(()=>{
          setState({seralNO:"",quantity:"",unit:"",asset_Priceinethbirr_perUnit:"",available_in_store:"",productID:"",supplyID:"",remaining_quantity:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../asset")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const data=["yes","no"]
  const goback=()=>{
    navigate("../Asset")
  }
  return (
    <div className='a5' >
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit(onSubmit)}
      > 
        <div className='a6'>
        <label className='a11' htmlFor="seralNO">seralNO</label>
<input className='a7' type="text" id="seralNO" name="seralNO" placeholder='seralNO ...' value={seralNO||""} onChange={handleInputChange} />

<label className='a11' htmlFor="quantity">qunatity</label>
<input className='a7' type="number" id="quantity" name="quantity" {...register("quantity", {
    min: 0,
    
  })} placeholder='quantity ...' value={quantity||""} onChange={handleInputChange}/>
 {errors.quantity && errors.quantity.type === "min" && (
        <span className='color' role="alert">number must be posetive or zero</span>
      )}
<label className='a11' htmlFor="unit">unit</label>
<input  className='a7' type="text" id="unit" name="unit" placeholder='unit...' value={unit||""} onChange={handleInputChange}/>
<label className='a11' htmlFor="asset_Priceinethbirr_perUnit">asset_Priceinethbirr_perUnit</label>
<input className='a7' type="number" id="asset_Priceinethbirr_perUnit" name="asset_Priceinethbirr_perUnit" placeholder='asset_Priceinethbirr_perUnit...' value={asset_Priceinethbirr_perUnit||""} onChange={handleInputChange}/>
<label className='a11' htmlFor="available_in_store">available_in_store</label>
<input  list="data" className='a7' type="text" id="available_in_store" name="available_in_store" placeholder='available_in_store ...' value={available_in_store||""} onChange={handleInputChange}/>
<datalist id='data'>
  {data.map((op)=><option>{op}</option>)}
</datalist>
<label  className='a11' htmlFor="productID">productID</label>
<input className='a7' type="number" id="productID" name="productID" placeholder='productID ...' value={productID||""} onChange={handleInputChange}/>
<label  className='a11' htmlFor="supplyID">supplyID</label>
<input className='a7' type="number" id="supplyID" name="supplyID" placeholder='supplyID ...' value={supplyID||""} onChange={handleInputChange}/>
<label  className='a11' htmlFor="remaining_quantity">remaining_quantity</label>
<input className='a7' type="number" id="remaining_quantity" name="remaining_quantity" placeholder='remaining_quantity ...' value={remaining_quantity||""} onChange={handleInputChange}/>
</div>
<div className='a8' >
     <input className="a10"type="submit" value={assetID ? "update":"save"}   />
    
      <button className='a9' onClick={goback}>Go Back</button>
    

     </div>

      </form>

    </div>
  )
}

export default AddEditAsset