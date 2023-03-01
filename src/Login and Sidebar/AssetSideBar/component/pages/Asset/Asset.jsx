import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "./asset.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

function Asset() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const navigate= useNavigate()
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getasset?q=${query}`)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])
    const deleteAsset=(assetID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleteasset/${assetID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }

    const remaingasset=()=>{
        navigate('/mainpage/availableasset')
      }

  return (
    <div> 
   
    <div className='class1' >
       
       
        <div>
    <input  className='ssarch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    <div className='availableasset'>
        <button onClick={remaingasset}>remaining asset</button></div>
    
    </div>
    </div>
   
    <div > 
        
    
    <Link to={"addasset"} >
     <button  className='a3' >Add</button>
    
     </Link>
    <div id='printablediv' >
<table className='a1'   >


   <thead className='a'>
    <tr >
    <th className='a4' style={{textAlign:"center"}}>No</th> 
       <th className='a4' style={{textAlign:"center"}}>seralNO</th> 
       <th className='a4' style={{textAlign:"center"}}>quantity</th> 
       <th className='a4' style={{textAlign:"center"}}>unit</th> 
       <th  className='a4' style={{textAlign:"center"}}>asset_Price</th> 
       <th className='a4' style={{textAlign:"center"}}>available_in_store</th> 
       
       <th className='a4'  style={{textAlign:"center"}}>productID</th> 
       <th className='a4' style={{textAlign:"center"}}>supplyID</th> 
       <th className='az' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 

    <tbody  className='a2'>
        {data.map((item,index)=>{
            return(
                
                <tr className='a4' key={item.assetID}>
                   
                    <th className='a4' scope='row'>{index + 1}</th>
                    <td className='a4'>{item.seralNO}</td>
                    <td className='a4'>{item.qunatity}</td>
                    <td className='a4'>{item.unit}</td>
                    <td className='a4'>{item.asset_Price}</td>
                    <td className='a4'>{item.available_in_store}</td>
                   
                    <td className='a4'>{item.productID}</td>
                    <td className='a4'>{item.supplyID}</td>
                    <td  className='az'>
                        

                        <Link to={`updateasset/${item.assetID}`}>
                        <button className='a0' ><CiEdit/> </button>
                        </Link>
                        <button className='a0' onClick={()=>deleteAsset(item.assetID)}><MdDeleteOutline/> </button>
                        <Link to={`viewasset/${item.assetID}`}>
                        <button  className='a0'><GrView/></button>
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

export default Asset