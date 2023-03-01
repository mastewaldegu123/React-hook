import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  
  productname:"",
product_description:"",
shelfno:"",
 categoryID:""

}
function AddEditProduct() {
  const [state,setState]=useState(initialstate)
 
  const{ productname, product_description, shelfno,categoryID}=state
 
  const navigate=useNavigate()
  const {productID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updateproduct/${productID}`).then((resp)=>setState({...resp.data[0]}))
  },[productID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!productname||!product_description||!shelfno||!categoryID){
      alert("please provide the value for each input field");
    }else{
      if(!productID){
        axios.post("http://localhost:5000/postproduct",{
         productname, product_description,shelfno, categoryID
        }).then(()=>{
          setState({productname:"",product_description:"",shelfno:"",categoryID:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updateproduct/${productID}`,{
          
         productname, product_description, shelfno,categoryID
        }).then(()=>{
          setState({productname:"",product_description:"",shelfno:"",categoryID:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../product")
        },500)
      }
     
  }

  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const goback=()=>{
    navigate("../product")
  }
  return (
    <div className='p5'>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='p6'>
<label className='p11'  htmlFor="">Product Name</label>
<input className='p7'   type="text" id="productname" name="productname" placeholder='product name...' value={productname||""} onChange={handleInputChange}/>
<label  className='p11' htmlFor="text">Product Description</label>
<input  className='p7'  type="text" id="product_description" name="product_description" placeholder='product_description...' value={product_description||""} onChange={handleInputChange}/>
<label className='p11'  htmlFor="shelfno">shelfno</label>
<input className='p7'   type="text" id="shelfno" name="shelfno" placeholder='shelfno...' value={shelfno||""} onChange={handleInputChange}/>
<label className='p11'  htmlFor="contact">categoryID</label>
<input className='p7'   type="text" id="categoryID" name="categoryID" placeholder='categoryID...' value={categoryID||""} onChange={handleInputChange}/>
</div>

<div className='p8' >
     <input className='p10' type="submit" value={productID ? "update":"save"}   />
   
      <button className='p9' onClick={goback}>Go Back</button>
   

     </div>

      </form>

    </div>
  )
}

export default AddEditProduct