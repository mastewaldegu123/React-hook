import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "./vendor.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'

function Vendor() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getvendorr?q=${query}`)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteVendor=(vendorID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deletevendor/${vendorID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}
    }
    

  return (
    <div> 
    <div className='ven1' >
    
    <div>
    <input  className='saavarch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    </div>
    <div>
    <Link to={"addvendor"} >
     <button  className='v3' >Add</button>
     </Link>
     <div id='printablediv' className='te'>
     
<table className='v1'  >


   <thead className='v'>
    <tr >
    <th className='v4' style={{textAlign:"center"}}>No</th> 
    <th className='v4' style={{textAlign:"center"}}>vendorID</th> 
       <th className='v4' style={{textAlign:"center"}}>vendorname</th> 
       <th className='v4' style={{textAlign:"center"}}>contactperson_name</th> 
      
       <th className='v4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='v2'>
        {data.map((item,index)=>{
            return(
            
                <tr key={item.venodrID}>
                  
                    <th className='v4'  scope='row'>{index + 1}</th>
                    <td className='v4'>{item.vendorID}</td>
                    <td className='v4'>{item.vendorname}</td>
                    <td className='v4'>{item.contactperson_name}</td>
         

                    <td  className='az'>
                        <Link to={`updatevendor/${item.vendorID}`}>
                        <button className='v0' ><CiEdit/></button>
                        </Link>
                        <button className='v0' onClick={()=>deleteVendor(item.vendorID)}><MdDeleteOutline/></button> 
                        <Link to={`viewvendor/${item.vendorID}`}>
                        <button  className='v0'><GrView/> </button>
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

export default Vendor