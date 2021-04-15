import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar';


const Chart = (props) => {
    const dataPointValues = props.datapoints.map(dataPoints => dataPoints.value)
    const totalMaximum = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {
                props.datapoints.map((datapoints) => {
                    return (
                        <ChartBar
                            value={datapoints.value}
                            maxValue={totalMaximum}
                            label={datapoints.label}
                            key={datapoints.label}>
                        </ChartBar>
                    );
                })
            }
        </div>
    );
}


export default Chart;