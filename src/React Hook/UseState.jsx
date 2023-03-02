import React,{useState} from 'react'

function UseState() {
  const [count,setCount]= useState(0)
  const handleclick=()=>{
    setCount(count + 1)
    



  }
  return (
    <div style={{display:'flex' , alignItems:'center' , justifyContent:'center ', marginTop:'150px'}  } >
       
 <h4 style={{width:'50px'}}>{count}</h4>
<button style={{ backgroundColor:'skyblue' ,width:'100px'}  } onClick={handleclick }>click</button>
    </div>
  )
}

export default UseState