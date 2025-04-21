import React from "react";
import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale,LineElement, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement } from "chart.js";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const LineChart = ({linedata,limit, title,theme}) => {
    // const [data, setData] = useState({
    //     labels: [],
    //     datasets: [{
    //         label: 'Dataset 1',
    //         data: [],
    //         borderColor: ['rgba(66, 3, 22, 0.2)'],
    //         borderWidth: 1,
    //     }]
    // });
    const weekly_sum = linedata.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // const isOverLimit = weekly_sum
    const height = 400;
    const width = 400;
    // console.log(linedata,title,theme)
    // useEffect(() => {
    //     axios.post("http://localhost:4000/getuserdata", { name })
    //         .then(result => {
    //             const userData = result.data;
    //             const i = 1;
    //             const height = userData.height || 400;
    //             const width = userData.width || 400;
    //             if (userData && userData.Expenditure) {
    //                 const newLabels = userData.Expenditure.map(element => element.title);
    //                 const newValues = userData.Expenditure.map(element => element.Spent);
    //                 setData({
    //                     labels: newLabels,
    //                     datasets: [{
    //                         ...data.datasets[0],
    //                         data: newValues,
    //                         backgroundColor: ['rgb(241, 53, 109)','rgb(248, 94, 140)','rgb(239, 128, 161)'],
    //                     }],
                        
    //                 });
    //             }
    //         })
    //         .catch(err => console.log("Axios error:", err));
    // }, []); // Only depend on `id`
    
const data = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [{
    label: title,
    data: linedata,
    fill: true, // ✅ must be true for area to show
    backgroundColor: 'rgba(30, 144, 255, 0.2)', // ✅ semi-transparent fill
    borderColor: theme==='light'?'black':'white',
    pointBorderColor: 'aqua',
    tension: 0.3,
  }]
};

const options = {
  responsive: true,
  plugins: {
    tooltip: {
      bodyColor: theme==='light'?'black':'white', //textcolor
      titleColor: theme==='light'?'black':'white',
    },
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      min: Math.min(...linedata) * 0.8,
      max: Math.max(...linedata) * 1.2,
      ticks: {
        color: theme==='light'?'black':'white',
      },
      grid:{
        color:theme==='light'?'black':'white'
      }
    },
    x: {
      ticks: {
        color: theme==='light'?'black':'white',
      },
      grid:{
        color:theme==='light'?'black':'white'
      }
    }
  }
};


    return (
      <div
      style={{
        width: '50%',
        margin: '0 auto',
        padding: '1rem',
        borderRadius: '10px'
      }}
    >
      <Line data={data} options={options} />
    </div>
    );
};

export default LineChart;