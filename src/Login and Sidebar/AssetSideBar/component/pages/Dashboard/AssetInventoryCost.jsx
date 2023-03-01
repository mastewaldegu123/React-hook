import React,{useState,useEffect} from 'react'
import axios from "axios"
import  {Link}from "react-router-dom"
import {toast}from "react-toastify"
import "../Asset/asset.css"
function AssetInventoryCost() {
    const[data,setData]=useState([])
    const loaddata=async()=>{
        const response=await axios.get("http://localhost:5000/addprice",)
        setData(response.data)
    }
    useEffect(()=>{loaddata()},[])
  return (
    <div> 
    
    </div>
  )
  
}

export default AssetInventoryCost