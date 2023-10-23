import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointAmounts = props.dataPoints.map(
		(dataPoint) => dataPoint.value
	);
	const totalMax = Math.max(...dataPointAmounts);

	return (
		<div className='chart'>
			{props.dataPoints.map((dataPoint, i) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
};

export default Chart;
