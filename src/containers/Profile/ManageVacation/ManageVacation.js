import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputText } from 'primereact/components/inputtext/InputText';

import Button from 'components/common/Button/Button';
import VacationRangeInput from 'components/VacationRangeInput/VacationRangeInput';
import './ManageVacation.css';

@connect(store => ({
  vacations: store.profile.get('vacations')
}))
class ManageVacation extends Component {

  state = {
    vacation: {
      days: [],
      description: ''
    }
  }

  changeDescriptionHandler = (event) => {
    this.setState({ vacation: {...this.state.vacation, description: event.target.value } });
  }

  submitHandler = () => {
    this.props.onSubmit(this.state.vacation);
    this.setState({ vacation: { days: [], description: '' } });
  }

  closeHandler = () => {
    this.props.onClose();
    this.setState({ vacation: { days: [], description: '' } });
  }

  render() {
    return (
      <div className="ManageVacation">
        <span className="ui-float-label">
          <InputText id="float-input" type="text" size="30" value={this.state.description} onChange={this.changeDescriptionHandler} />
          <label htmlFor="float-input">Description</label>
        </span>
        <div>
          <VacationRangeInput vacations={this.props.vacations} onChange={ (days) => {
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
