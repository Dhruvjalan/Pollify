import React from "react";
import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ChartComponent = ({ id }) => {
    const [data, setData] = useState({
        labels: [],
        datasets: [{
            label: 'Dataset 1',
            data: [],
            borderColor: ['rgba(66, 3, 22, 0.2)'],
            borderWidth: 1,
        }]
    });
    const height = 400;
    const width = 400;

    useEffect(() => {
        axios.post("http://localhost:4000/getpoll", { id })
            .then(result => {
                const blogData = result.data;
                const i = 1;
                const height = blogData.height || 400;
                const width = blogData.width || 400;
                if (blogData && blogData.poll) {
                    const newLabels = blogData.poll.map(element => element.option);
                    const newValues = blogData.poll.map(element => element.votes);
                    setData({
                        labels: newLabels,
                        datasets: [{
                            ...data.datasets[0],
                            data: newValues,
                            backgroundColor: ['rgb(241, 53, 109)','rgb(248, 94, 140)','rgb(239, 128, 161)'],
                        }],
                        
                    });
                }
            })
            .catch(err => console.log("Axios error:", err));
    }, [id]); // Only depend on `id`

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Poll Results' }
        },
        // maintainAspectRatio : false,
    };

    return <Pie data={data} options={options} />;
};

export default ChartComponent;