import React, { Component } from 'react';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

import IconButton from 'components/common/IconButton/IconButton';
import './VacationRow.css';

class VacationRow extends Component {

  state = {
    opened: false,
  }

  render() {
    const { vacation } = this.props;
    const labels = vacation.days.map(day => moment(day.moment).format("MMM DD"));
    const colors = Array(labels.length).fill('#0CB7E8');
    const values = vacation.days.map(day => day.hours);
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
    const totalHours = vacation.days.map(day => day.hours).reduce((total, hours) => total + hours, 0);
    const durationDays = Math.trunc(totalHours / 8);
    const durationHours = totalHours - durationDays * 8;

    const header = (
      <div className="ui-g VacationRow-Header" onClick={() => this.setState(prevState => ({ opened: !prevState.opened }))}>
        <div className="ui-g-2">{`${durationDays}d`}{durationHours ? ` ${durationHours}h` : ''}</div>
        <div className="ui-g-3">{vacation.type}</div>
        <div className="ui-g-7">{vacation.description}</div>
      </div>
    );

    if (!this.state.opened) {
      return header;
    }

    return (
      <div>
        { header }
        <div className="VacationRow-Body">
          <div className="ui-g">
            <div className="VacationRow-Days">
              <Bar data={chartData} options={chartOptions} />
            </div>
            <div className="VacationRow-Buttons">
              <IconButton icon='fa fa-edit' />
              <IconButton icon='fa fa-remove' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VacationRow;
