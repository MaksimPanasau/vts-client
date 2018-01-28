import React, { Component } from 'react';

import VacationRow from './VacationRow/VacationRow';
import './VacationList.css';

class VacationList extends Component {

  render() {
    const vacations = this.props.vacations;
    return (
      <div className="VacationList">
        { vacations.map(vac => {
          return (
            <div key={vac._id} >
              <VacationRow vacation={vac} />
            </div>)
        }) }
      </div>
    );
  }
}

export default VacationList;
