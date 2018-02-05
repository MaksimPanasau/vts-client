import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from 'components/common/Input/Input';
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
    this.props.onSubmit({ ...this.state.vacation, type: this.props.type });
    this.setState({ vacation: { days: [], description: '' } });
  }

  closeHandler = () => {
    this.props.onClose();
    this.setState({ vacation: { days: [], description: '' } });
  }

  vacationRangeInputHandler = (days) => {
    this.setState({ vacation: { ...this.state.vacation, days }});
  }

  render() {
    return (
      <div className="ui-g ManageVacation">
        <div class="ui-g-12 ui-md-6 ManageVacation-Inputs">
          <Input label="Description" id="float-input" type="text" value={this.state.vacation.description} onChange={this.changeDescriptionHandler} />
          <div>
            <VacationRangeInput vacations={this.props.vacations} days={this.state.vacation.days} onChange={this.vacationRangeInputHandler} />
          </div>
        </div>
        <div class="ui-g-12 ui-md-6 ManageVacation-Buttons">
          <Button onClick={this.submitHandler}>Submit</Button>
          <Button onClick={this.closeHandler}>Close</Button>
        </div>
      </div>
    )
  }
}

export default ManageVacation;
