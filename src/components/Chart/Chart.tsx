import React from "react";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import styles from "./Chart.module.css";

ChartJS.register(
		CategoryScale,
		LinearScale,
		BarElement,
		Title,
		Tooltip,
		Legend
);

export const options = {
	responsive: true,
	plugins: {
		legend: {
			position: 'top' as const,
		},
		title: {
			display: true,
			text: 'Weather forecast for 5 days',
		},
	},
};

const daysOfWeek = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

const labels = daysOfWeek
export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 1',
			data: [1, 2, 3, 4, 5, 6, 7],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',
		},
	],
};
export const Chart: React.FC = () => {
	return <section className="content-main__chart">
		<Bar options={options} data={data}/>
	</section>
}
