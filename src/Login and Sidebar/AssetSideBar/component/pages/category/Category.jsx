import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./category.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Category() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')



    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getcategoryy?q=${query}`,)
        console.log(response.data)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteCategory=(categoryID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletecategory/${categoryID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
   
  return (
    <div> 
    <div className='vendr1' >
        
       
        <div>
    <input  className='sarrcch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div  > 
    <Link to={"addcategory"} >
     <button  className='c3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='c1' >


   <thead className='c'>
    <tr>
    <th className='c4' style={{textAlign:"center"}}>No</th> 
       <th className='c4' style={{textAlign:"center"}}>categoryname</th> 
       <th className='c4' style={{textAlign:"center"}}>listofproduct</th> 
       <th className='c4' style={{textAlign:"center"}}>category_description</th> 
       <th className='cz' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='c2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.categoryID}>
                   
                    <th className='c4'  scope='row'>{index + 1}</th>
                   
                    <td className='c4'>{item.categoryname}</td>
                    <td className='c4'>{item.listofproduct}</td>
                    <td className='c4'>{item.category_description}</td>
                    <td  className='cz'>
                    
                        <Link to={`updatecategory/${item.categoryID}`}>
                        <button className='c0' ><CiEdit/> </button>
                        </Link>
                        <button className='c0' onClick={()=>deleteCategory(item.categoryID)}><MdDeleteOutline/></button>
                        <Link to={`viewcategory/${item.categoryID}`}>
                        <button  className='c0'><GrView/> </button>
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

export default Category