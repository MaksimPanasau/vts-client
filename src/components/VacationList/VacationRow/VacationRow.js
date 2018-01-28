import React, { Component } from 'react';
import moment from 'moment';
import { Panel } from 'primereact/components/panel/Panel';

import VacationDayBox from '../../VacationDayBox/VacationDayBox';
import './VacationRow.css';

class VacationRow extends Component {

  render() {
    return (<Panel className="VacationRow" header={this.props.vacation.description}>
      <div className="VacationRow-Days">
        {
          this.props.vacation.days.map(day => (
            <div key={day._id}>
              <VacationDayBox day={{ moment: moment(day.moment), hours: day.hours }} />
            </div>
          ))
        }
      </div>
      <div className="VacationRow-Buttons">
        <button>Edit</button>
        <button>Cancel</button>
      </div>
    </Panel>);
  }
}

export default VacationRow;
