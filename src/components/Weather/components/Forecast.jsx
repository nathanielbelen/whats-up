import { Line, getElementAtEvent } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const Forecast = ({ data, setHour }) => {
  const temps = data.map((hour) => hour[1]);
  const chartRef = useRef(null);

  const handleChartClick = (event) => {
    const { current: chart } = chartRef;
    // const chart = chartRef.current
    if (!chart) return;
    setElementIndexAtEvent(getElementAtEvent(chart, event));
  };

  const setElementIndexAtEvent = (element) => {
    if (!element.length) return;
    const { index } = element[0];
    setHour(index);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="forecast"
    >
      <Line
        ref={chartRef}
        data={{ labels: times, datasets: [{ label: "", data: temps }] }}
        onClick={handleChartClick}
        options={chartOptions}
      />
    </motion.div>
  );
};

// helpers

let times = ['12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'];

let chartOptions = {
  responsive: true,
  aspectRatio: 1,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      titleAlign: "center",
      displayColors: false,
      enabled: true,
      callbacks: {
        label: function (context) {
          let label = context.dataset.label || "";

          if (label) {
            label += ": ";
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y} °F`;
          }
          return label;
        },
      },
    },
  },
  elements: {
    line: {
      borderWidth: 7,
      borderCapStyle: "round",
    },
    point: {
      radius: 7,
      hitRadius: 6,
      hoverRadius: 10,
    },
  },
}

export default Forecast;
