import React from "react";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartComponent = ({ name,title,cutout,piedata }) => {
    const [data, setData] = useState({
        labels: piedata.map(item => item.title.toLowerCase()),
        datasets: [{
            label: 'Dataset 1',
            data: piedata.map(item => item.value),
            backgroundColor: ['#00BFFF	','#00FFFF	','#7DF9FF'],
            borderWidth: 1,
        }]
    });
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
    //                         backgroundColor: ['#00BFFF	','#00FFFF	','#7DF9FF'],
    //                     }],
                        
    //                 });
    //             }
    //         })
    //         .catch(err => console.log("Axios error:", err));
    // }, []); // Only depend on `id`

    const options = {
        responsive: true,
        cutout,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: title }
        },

        // maintainAspectRatio : false,
    };

    return (
        <div style={{ width: 'auto', margin: '0 auto' }}>
            <Pie data={data} options={options} />
        </div>
        );
};

export default ChartComponent;