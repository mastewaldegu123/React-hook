import React,{useState,useEffect} from 'react'
import{Link,useParams,useNavigate} from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';

const initialstate={
  
  categoryname:"",
  listofproduct:"",
  category_description:""
}
function AddEditCategory() {
  const [state,setState]=useState(initialstate)
  const{categoryname,listofproduct,category_description}=state
 
  const navigate=useNavigate()
  const {categoryID}=useParams();
  useEffect(()=>{ 
    axios.get(`http://localhost:5000/updatecategory/${categoryID}`).then((resp)=>setState({...resp.data[0]}))
  },[categoryID])
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    if(!categoryname||!listofproduct||!category_description){
      alert("please provide the value for each input field");
    }else{
      if(!categoryID){
        axios.post("http://localhost:5000/postcategory",{
          categoryname,listofproduct,category_description
        }).then(()=>{
          setState({categoryname:"",listofproduct:"",category_description:""})
        }).catch((err)=>{
          toast.error(err.response.data)})
      
      }else{
        axios.put(`http://localhost:5000/updatecategory/${categoryID}`,{
          
          categoryname,listofproduct,category_description
        }).then(()=>{
          setState({categoryname:"",listofproduct:"",category_description:""})
        }).catch((err)=>{
          toast.error(err.response.data)}) 
        };setTimeout(()=>{
          navigate("../category")
        },500)
      }
     
  }
  const handleInputChange=(e)=>{
     const{name,value}=e.target;
     setState({...state,[name]:value})
  }
  const goback=()=>{
    navigate("../category")
  }
  return (
    <div className='c5'>
      <form 
      style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center"
      }}
      onSubmit={handleSubmit}
      >
        <div className='c6'>
<label className='c11' htmlFor="CategoryName">CategoryName</label>
<input className='c7'type="text" id="categoryname" name="categoryname" placeholder='category name...' value={categoryname||""} onChange={handleInputChange}/>
<label className='c11'htmlFor="listofproduct">List of product</label>
<input className='c7'type="text" id="listofproduct" name="listofproduct" placeholder='listofproduct...' value={listofproduct||""} onChange={handleInputChange}/>
<label className='c11'htmlFor="Category_Description">Category_Description</label>
<input className='c7'type="text" id="category_description" name="category_description" placeholder='category_description...' value={category_description||""} onChange={handleInputChange}/>
</div>

<div className='c8' >
     <input className="c10" type="submit" value={categoryID ? "update":"save"}   />
     
      <button className='c9' onClick={goback}>Go Back</button>
     

     </div>

      </form>

    </div>
  )
}

export default AddEditCategory