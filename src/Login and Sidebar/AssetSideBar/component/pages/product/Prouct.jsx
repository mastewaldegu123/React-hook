import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./product.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Product() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getproduct?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteProduct=(productID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteproduct/${productID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
   
  return (
    <div> 
    <div className='ve1' >
        
       
        <div>
    <input  className='sarrpchd'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"addproduct"} >
     <button  className='p3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='p1' >


   <thead className='p'>
    <tr>
    <th className='p4' style={{textAlign:"center"}}>No</th> 
       <th className='p4' style={{textAlign:"center"}}>productname</th> 
       <th className='p4' style={{textAlign:"center"}}>product_description</th> 
       <th className='p4' style={{textAlign:"center"}}>shelfno</th>
       <th  className='p4' style={{textAlign:"center"}}>categoryID</th> 
       <th className='p4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='p2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.productID}>
                   
                    <th  className='p4' scope='row'>{index + 1}</th>
                   
                    <td className='p4'>{item.productname}</td>
                    <td className='p4'>{item.product_description}</td>
                    <td className='p4'>{item.shelfno}</td>
                    <td className='p4'>{item.categoryID}</td>
                    <td  className='pz'>
                   
                        <Link to={`updateproduct/${item.productID}`}>
                        <button className='p0' > <CiEdit/> </button>
                        </Link>
                        <button className='p0' onClick={()=>deleteProduct(item.productID)}><MdDeleteOutline/></button>
                        <Link to={`viewproduct/${item.productID}`}>
                        <button  className='p0'><GrView/> </button>
                        </Link>
                    </td>
                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
</div>
    </div>
  )
  
}

export default Product