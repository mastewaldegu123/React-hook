import React,{useEffect,useState} from 'react'
import {Pie } from 'react-chartjs-2'
import {Chart as ChartJS ,Tooltip, Title,ArcElement,Legend} from 'chart.js'
ChartJS.register(
  Tooltip,
   Title,
   ArcElement,
   Legend
)


function Piechart() {
  const [data,setData] =useState()
 useEffect(()=>{
  const fetchData=()=>{
fetch('http://localhost:5000/performancestatus').then(data=>{
const res = data.json()
return res
}).then((res)=>{
 const label=[];
 const data =[];
for (var i of res){
  label.push(i.name);
data.push(i.id)
}

 

setData({

  datasets: [{
    data: data,
    backgroundColor:[
      'yellow',
      'green',
      'red',
      
    ],
    
  },
  
],
labels: label ,
})


  }
).catch(e =>{
  console.log('error', e)
} 

)

  }
  fetchData()
 },[])
 
  return (
 
    <div className='pie'>
<Pie  
data={data}
/>
    </div>
  )
}

export default  Piechart
