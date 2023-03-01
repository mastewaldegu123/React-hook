import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link,useNavigate}from "react-router-dom"
import {toast}from "react-toastify"
import "./request.css"
import {MdDeleteOutline} from 'react-icons/md'
import {CiEdit} from 'react-icons/ci'
import {GrView} from 'react-icons/gr'
function Request() {
    const[data,setData]=useState([])
    const[ query,setQuery]=useState('')
    const navigate=useNavigate()
    const loaddata=async()=>{
        const response=await axios.get(`http://localhost:5000/getrequest?q=${query}`)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[query])

    const deleteRequest=(requestID)=>{
if(window.confirm("are you sure you want to delet this!"))
{
    axios.delete(`http://localhost:5000/deleterequest/${requestID}`);
    alert("deleted sucessfuly");
    setTimeout(()=>loaddata(),500)}

    }
    
const gototheremaining =()=>{
    navigate('/mainpage/remainingrequest')
}



  return (
    <div> 
    <div className='class7' >
        
        
        <div>
    <input  className='sasvarch'  placeholder=' Search ...'  onChange={e=>setQuery(e.target.value)} />
    
    </div>
        <div>

            <button className='remainrequest' onClick={gototheremaining}>remaining request</button>
        </div>
    </div>
    
    <Link to={"addrequest"} >
     <button  className='r3' >AddRequest</button>
     </Link>
     <div id='printablediv' >
<table className='rrrrr1' >


   <thead className='r'>
    <tr>
    <th  className='r4' style={{textAlign:"center"}}>No</th> 
    <th className='r4' style={{textAlign:"center"}}>requestNo</th> 
    <th className='r4' style={{textAlign:"center"}}>requesterID</th> 
    <th className='r4' style={{textAlign:"center"}}>quantity</th> 
    <th className='r4' style={{textAlign:"center"}}>unit</th> 
    <th className='r4' style={{textAlign:"center"}}>priceinethbirr</th> 
    <th className='r4' style={{textAlign:"center"}}>approvedby</th> 
       <th className='r4' style={{textAlign:"center"}}>recievedby</th> 
       <th className='r4' style={{textAlign:"center"}}>productID</th> 
       <th className='r4' style={{textAlign:"center"}}>requester_name</th> 
       
       <th className='r4' style={{textAlign:"center"}}> Action</th> 
    </tr>
    </thead> 
    <tbody  className='r2'>
        {data.map((item,index)=>{
            return(
             
                <tr key={item.requestNo}>
                   
                    <th className='r4'  scope='row'>{index + 1}</th>
                    
                    <td className='r4'>{item.requestNo}</td>
                    <td className='r4'>{item.requesterID}</td>
                    <td className='r4'>{item.quantity}</td>
                    <td className='r4'>{item.unit}</td>
                    <td className='r4'>{item.priceinethbirr}</td>
                    <td className='r4'>{item.approvedby}</td>
                    <td className='r4'>{item.recievedby}</td>
                    <td className='r4'>{item.productID}</td>
                    <td className='r4'>{item.requester_name}</td>
                    <td  className='rz'>
                
                        <Link to={`updaterequest/${item.requestNo}`}>
                        <button className='r0' > <CiEdit/></button>
                        </Link>
                        <button className='r0' onClick={()=>deleteRequest(item.requestNo)}><MdDeleteOutline/></button>
                        <Link to={`viewrequest/${item.requestNo}`}>
                        <button  className='r0'><GrView/> </button>
                        </Link>
                    </td>
                   
                </tr>
                
            )
        })}
    </tbody>
</table>
</div>
</div>
  )
  
}

export default Request