import React,{useEffect,useState} from 'react'
import {Line } from 'react-chartjs-2'
import {Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js'

 
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
 
  
  const ChartJsExample = () => {
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
        labels: ["2017", "2018", "2019", "2020", "2021", "2022"]
      })

      useEffect(()=>{
        const fetchData=()=>{
        fetch('http://localhost:5000/assetperdepartment').then(data=>{
          const res=data.json()
          return res
    
        }).then((res)=>{
          console.log('resss',res)
          const label=[];
          const data=[];
          for (var i of res){
            label.push(i.year);
          data.push(i.asset_buget_expense_per_department)
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
      const options = {
        plugins: {
          legend: {
            position: "bottom",
          },
        },
      };
    return (
      <div style={{ width: 400, height: 200 }}>
        <Line options={options} data={data} />
      </div>
    );
  };
  
  export default ChartJsExample;