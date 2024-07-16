import React, { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto';

export default function ClubChart({ clubData }) {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartInstance = new Chart(chartRef.current, {
            type: 'pie',
            data: {
                labels: clubData.map(club => club._id),
                datasets: [{
                    data: clubData.map(club => club.count),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
                }],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        });

        return () => {
            chartInstance.destroy();
        };
    }, [clubData]);



  return (
    <div className="chart-container">
      <canvas ref={chartRef} className="chart-canvas" />
    </div>
  )
}
