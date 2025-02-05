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
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1,
        }]
    });

    useEffect(() => {
        axios.post("http://localhost:4000/getpoll", { id })
            .then(result => {
                const blogData = result.data;
                if (blogData && blogData.poll) {
                    const newLabels = blogData.poll.map(element => element.option);
                    const newValues = blogData.poll.map(element => element.votes);
                    setData({
                        labels: newLabels,
                        datasets: [{
                            ...data.datasets[0],
                            data: newValues,
                        }]
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
        }
    };

    return <Pie data={data} options={options} />;
};

export default ChartComponent;