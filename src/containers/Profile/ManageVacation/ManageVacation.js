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
    this.props.onSubmit(this.state.vacation);
    this.setState({ vacation: { days: [], description: '' } });
  }

  closeHandler = () => {
    this.props.onClose();
    this.setState({ vacation: { days: [], description: '' } });
  }

  render() {
    return (
      <div className="ui-g ManageVacation">
        <div class="ui-g-6">
          <Input label="Description" id="float-input" type="text" value={this.state.description} onChange={this.changeDescriptionHandler} />
        </div>
        <div class="ui-g-6">
          <Button onClick={() => this.props.onSubmit(this.state.vacation)}>Submit</Button>
          <Button onClick={this.props.onClose}>Close</Button>
        </div>
        <div class="ui-g-12">
          <div>
            <VacationRangeInput vacations={this.props.vacations} onChange={ (days) => {
              this.setState({ vacation: { ...this.state.vacation, days, type: this.props.type }});
            }} />
          </div>
        </div>
      </div>
    )
  }
}

export default ManageVacation;
