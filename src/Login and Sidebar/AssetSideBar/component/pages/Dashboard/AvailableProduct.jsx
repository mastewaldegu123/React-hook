import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link ,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "../Asset/asset.css"
import Productname from './Productname'
function AvailableProduct() {

    const[data,setData]=useState([])
    const navigate =useNavigate()
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/product_asset",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
    const goback=()=>{
        navigate("../")
    }
  return (
    <div> 
    <div className='searc' >
        <input type="text"  className='search'  placeholder='search ...'/>
    </div>
    <div  > 
   
     
<table className='a1' >


   <thead className='a'>
    <tr >
    <th className='a4' style={{textAlign:"center"}}>No</th> 
       <th className='a4' style={{textAlign:"center"}}>productname</th> 
       <th className='a4' style={{textAlign:"center"}}>qunatity</th> 
       <th className='a4' style={{textAlign:"center"}}>unit</th> 
       <th  className='a4' style={{textAlign:"center"}}>product_description</th> 
      
    </tr>
    </thead> 
    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
                
                <tr className='a4' key={item.assetID}>
                
                    <th className='a4' scope='row'>{index + 1}</th>
                    <td className='a4'>{item.productname}</td>
                    <td className='a4'>{item.qunatity}</td>
                    <td className='a4'>{item.unit}</td>
                    <td className='a4'>{item.product_description}</td>
                  

                   
                </tr>
                
            )
        })}
    </tbody>
</table>

</div>
<>
<button onClick={goback}>go back</button>

</>
    </div>
  )
  
}

export default AvailableProduct