import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link ,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "../Asset/asset.css"
function ReturnedAssetStatus() {

    const[data,setData]=useState([])
    const navigate =useNavigate()
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/assetreturnstatus",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    
  return (
    <div> 
   
    <div  > 
   
     
<table className='a1' >


   <thead className='a'>
    <tr >
    <th className='a4' style={{textAlign:"center"}}>No</th> 
       <th className='a4' style={{textAlign:"center"}}>number</th> 
       <th className='a4' style={{textAlign:"center"}}>unit</th> 
       <th className='a4' style={{textAlign:"center"}}>Performance_status</th> 
       
      
    </tr>
    </thead> 
    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
              
                <tr className='a4' key={item.assetID}>
                
                    <th className='a4' scope='row'>{index + 1}</th>
                    <td className='a4'>{item.number}</td>
                    <td className='a4'>{item.unit}</td>
                    <td className='a4'>{item.Performance_status}</td>
                   
                  

                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
<>


</>
    </div>
  )
  
}

export default ReturnedAssetStatus