import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';
import { prototype } from 'twilio/lib/twiml/FaxResponse';

const Chart = (props) => {
  return (
    <div className='chart'>
      {prototype.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
