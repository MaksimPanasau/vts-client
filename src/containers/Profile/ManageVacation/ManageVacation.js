import React, { Component } from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';

import Button from 'components/common/Button/Button';
import VacationRangeInput from 'components/VacationRangeInput/VacationRangeInput';
import './ManageVacation.css';

class ManageVacation extends Component {

  state = {
    vacation: {
      days: []
    }
  }

  render() {
    return (
      <div className="ManageVacation">
        <span className="ui-float-label">
          <InputText id="float-input" type="text" size="30" />
          <label htmlFor="float-input">Description</label>
        </span>
        <div>
          <VacationRangeInput onChange={ (days) => {
            this.setState({ vacation: { ...this.state.vacation, days }});
          }} />
        </div>
        <div>
          <Button onClick={() => this.props.onSubmit(this.state.vacation)}>Submit</Button>
          <Button onClick={this.props.onClose}>Close</Button>
        </div>
      </div>
    )
  }
}

export default ManageVacation;
