import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "./Asset_return.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Asset_returned() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const navigate= useNavigate()
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getasset_returned?q=${query}`,)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteAsset_return=(asset_returnedID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteasset_returned/${asset_returnedID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
      const remaingasset=()=>{
        navigate('/availableasset')
      }
  return (
    <div> 
    <div className='class6' >
        
       
        <div>
    <input  className='sarrch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
    
    </div>
    <div  > 
    <Link to={"addasset_returned"} >
     <button  className='AA3' >Add</button>
     </Link>
     <div id='printablediv' >
<table className='AA1' >
   <thead className='AA'>
    <tr>
    <th className='AA4'  style={{textAlign:"center"}}>No</th> 
       <th className='AA4' style={{textAlign:"center"}}>Purpose_returned</th> 
       <th className='AA4' style={{textAlign:"center"}}>Performance_status</th> 
       <th className='AA4' style={{textAlign:"center"}}>emp_itemID</th> 
       <th className='AA4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='AA2'>
        {data.map((item,index)=>{
            return(
                
                <tr key={item.asset_returnedID}>
                  
                    <th className='AA4' scope='row'>{index + 1}</th>
                   
                    <td className='AA4'>{item.Purpose_returned}</td>
                    <td className='AA4'>{item.Performance_status}</td>
                    <td className='AA4'>{item.emp_itemID}</td>
                    <td  className='AAz'>
        
                        <Link to={`updateasset_returned/${item.asset_returnedID}`}>
                        <button className='AA0' ><CiEdit/> </button>
                        </Link>
                        <button className='AA0' onClick={()=>deleteAsset_return(item.asset_returnedID)}><MdDeleteOutline/> </button>
                        <Link to={`viewasset_returned/${item.asset_returnedID}`}>
                        <button  className='AA0'><GrView/> </button>
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

export default Asset_returned