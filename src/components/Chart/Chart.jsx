import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const randomArray = (length, minValue, maxValue) => {
    return Array.from({ length }, () => Math.random() * (maxValue - minValue) + minValue);
};


const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: randomArray(100, 0, 100),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
        },
        {
            label: 'Dataset 2',
            data: randomArray(200, 0, 100),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235, 1)',
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
    interaction: {
        mode: 'index',
        intersect: false,
    },
    scales: {
        x: {
            display: true,
            title: {
                display: true,
                text: 'Month',
            },
        },
        y: {
            display: true,
            title: {
                display: true,
                text: 'Value',
            },
        },
    },
    animation: {
        duration: 2000,
        easing: 'easeInOutQuad',
    },
    tooltips: {
        mode: 'index',
        intersect: false,
    },
};

const BarPage = () => {
    return <Bar options={options} data={data} />;
};

export default BarPage;
