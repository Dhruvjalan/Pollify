import React from "react";
import { useContext, useState, useEffect } from "react";
import {ThemeContext} from "./ThemeContext"
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale,LineElement, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, Filler } from "chart.js";
import axios from "axios";


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

const BarChart = ({bardata,title}) => {
    // const [data, setData] = useState({
    //     labels: [],
    //     datasets: [{
    //         label: 'Dataset 1',
    //         data: [],
    //         borderColor: ['rgba(66, 3, 22, 0.2)'],
    //         borderWidth: 1,
    //     }]
    // });
    const {theme} = useContext(ThemeContext)
    const [colors,setColors]=useState({
        borderColor: 'black',
        gridColor: 'black',
        textColor:'black'
    })
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

    useEffect(()=>{
        const styles = getComputedStyle(document.body);
        setColors({
            borderColor: styles.getPropertyValue("--text-color").trim(),
            gridColor: styles.getPropertyValue("--nav-border").trim(),
            textColor: styles.getPropertyValue("--text-color").trim(),
            blackwhite: styles.getPropertyValue("--black-white").trim(),
        });
        // console.log("colors on l61",colors, 'theme=',theme)
    },[theme])

    const data = {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            labels: title,
            data:bardata,
            backgroundColor: 'aqua',
            borderColor: colors.textColor,
            pointBorderColor: 'aqua'
        }]
    }
    // console.log("colors on l74",colors, "theme=",theme)
    const options = {
        responsive: true,
        plugins: {
            legend: {display:false,color:theme=='dark'?'#aee7ff':'#0b1e3d'},
            title: { display: true, text: title,color:theme=='dark'?'#aee7ff':'#0b1e3d' }
        },
        scales:{
            y:{
                min:Math.min(...bardata)*0.8,
                max:Math.min(...bardata)*1.2,
                grid:{
                    color:theme=='dark'?'#aee7ff':'#0b1e3d',
                },
                ticks:{color:theme=='dark'?'#aee7ff':'#0b1e3d'},
            },
            x:{
                ticks:{
                    color: theme=='dark'?'#aee7ff':'#0b1e3d',
                },
                grid:{
                    color: theme=='dark'?'#aee7ff':'#0b1e3d',
                },
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