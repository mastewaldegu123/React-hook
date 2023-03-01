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
  const [data,setData]=useState({
    datasets: [{
        data: [0, 0, 0],
        backgroundColor:[
          "rgba(0,0,2,0.2)",
          "rgba(0,0,2,0.2)",
          "rgba(0,0,2,0.2)",
          
        ], 
    },
    
  ],
    labels: [
        'Red',
        'Yellow',
        'Blue'
    ]
  })
  useEffect(()=>{
    const fetchData=()=>{
    fetch('http://localhost:5000/supplystatusthree').then(data=>{
      const res=data.json()
      return res

    }).then((res)=>{
      console.log('resss',res)
      const label=[];
      const data=[];
      for (var i of res){
      
        label.push(i.supplying_status);
      data.push(i.cost_of_suuplied_status)
      }
setData({
  datasets: [{
      data: data,
      backgroundColor:[
        "rgba(255, 0, 0,0.7)",
        "rgba(0, 255, 0,0.7)",
        "rgba(255, 255, 0,0.7)",
        
        
        
      ], 
  },
  
],
  labels: label
})




    }).catch(e =>{
      console.log('error', e)
    } 
    
    )}

    fetchData();
  },[])
  return (
    <div className='pie'>


      <Pie data={data}/>
    </div>
  )
}

export default Piechart