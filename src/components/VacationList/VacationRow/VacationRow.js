import React, { Component } from 'react';
import moment from 'moment';
import { Panel } from 'primereact/components/panel/Panel';
import { Bar } from 'react-chartjs-2';

import './VacationRow.css';

class VacationRow extends Component {

  render() {
    const labels = this.props.vacation.days.map(day => moment(day.moment).format("MMM DD"));
    const colors = Array(labels.length).fill('#0CB7E8');
    const values = this.props.vacation.days.map(day => day.hours);
    const chartData = {
      labels: labels,
      datasets: [
        {
          backgroundColor: colors,
          data: values
        }
      ]
    }
    const chartOptions = {
      legend: { display: false },
      scales: {
        xAxes: [{
          gridLines: {
            display:false
          },
          categoryPercentage: 0.9,
          barPercentage: 1.0
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true
          },
          display: false
        }]
      }
    };
    return (<Panel className="VacationRow" header={this.props.vacation.description}>
      <div className="VacationRow-Days">
        <div>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
      <div className="VacationRow-Buttons">
        <button>Edit</button>
        <button>Cancel</button>
      </div>
    </Panel>);
  }
}

export default VacationRow;
