import React, { useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { ThemeContext } from "./ThemeContext";

const LineChart = ({ linedata, title }) => {
  const { theme } = useContext(ThemeContext);
  const [colors, setColors] = useState({
    borderColor: "#000000",
    gridColor: "black",
    textColor: "black",
  });

  useEffect(() => {
    const styles = getComputedStyle(document.body);
    setColors({
      borderColor: styles.getPropertyValue("--text-color").trim(),
      gridColor: styles.getPropertyValue("--nav-border").trim(),
      textColor: styles.getPropertyValue("--text-color").trim(),
    });
  }, [theme]);

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: title,
        data: linedata,
        backgroundColor: "rgba(30, 144, 255, 0.2)",
        borderColor: theme=='dark'?'#aee7ff':'#0b1e3d',
        pointBorderColor: "aqua",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        bodyColor: theme=='dark'?'#aee7ff':'#0b1e3d',
        titleColor: theme=='dark'?'#aee7ff':'#0b1e3d',
      },
      legend: {
        display: false,
        color: theme=='dark'?'#aee7ff':'#0b1e3d'
      },
      title: { display: true, text: title,color:theme=='dark'?'#aee7ff':'#0b1e3d' }

    },
    scales: {
      y: {
        min: Math.min(...linedata) * 0.8,
        max: Math.max(...linedata) * 1.2,
        ticks: { color: theme=='dark'?'#aee7ff':'#0b1e3d' },
        grid: { color: theme=='dark'?'#aee7ff':'#0b1e3d' },
      },
      x: {
        ticks: { color: theme=='dark'?'#aee7ff':'#0b1e3d' },
        grid: { color: theme=='dark'?'#aee7ff':'#0b1e3d' },
      },
    },
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "0 auto",
        padding: "1rem",
        borderRadius: "10px",
      }}
    >
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
