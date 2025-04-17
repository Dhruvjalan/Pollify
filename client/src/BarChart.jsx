import React from "react";
import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale,LineElement, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement } from "chart.js";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const BarChart = ({bardata}) => {
    // const [data, setData] = useState({
    //     labels: [],
    //     datasets: [{
    //         label: 'Dataset 1',
    //         data: [],
    //         borderColor: ['rgba(66, 3, 22, 0.2)'],
    //         borderWidth: 1,
    //     }]
    // });
    const height = 400;
    const width = 400;

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
            labels: 'Sales of the Week',
            data:bardata,
            backgroundColor: 'aqua',
            borderColor: 'black',
            pointBorderColor: 'aqua'
        }]
    }
    const options = {
        responsive: true,
        plugins: {
            legend: {display:false},
            title: { display: true, text: 'Expenditure' }
        },
        scales:{
            y:{
                min:Math.min(...bardata)*0.8,
                max:Math.min(...bardata)*1.2
            },
        }
        // maintainAspectRatio : false,
    };

    return (
        <div style={{ width: '50%', margin: '0 auto' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;