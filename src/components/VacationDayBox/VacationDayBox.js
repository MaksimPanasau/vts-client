import React, { Component } from 'react';

import './VacationDayBox.css';

class VacationDayBox extends Component {

  render() {
    const { day, onClick, active } = this.props;;
    return (
      <div key={day._id} className={`VacationDayBox ${active && 'active'} ${day.hours < 8 && 'partial-time'}`} onClick={onClick} >
        <div className="VacationDayBox-Day">{day.moment.format("MMM DD")}</div>
        <div className="VacationDayBox-Hours">{day.hours}h</div>
      </div>
    );
  }
}

export default VacationDayBox;
