import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Button from 'components/common/Button/Button';
import BasePage from '@/hoc/layout/BasePage';
import { setNavLabelAction, fetchProfileDataAction, submitProfileVacationAction } from 'store/actions';
import ManageVacation from './ManageVacation/ManageVacation';
import VacationList from 'components/VacationList/VacationList';

import './Profile.css';

@connect(store => ({
    employee: store.profile.get('employee'),
    vacations: store.profile.get('vacations'),
    error: store.profile.get('error')
}),
dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text)),
  fetchProfileData: () => dispatch(fetchProfileDataAction()),
  submitProfileVacation: (vacation) => dispatch(submitProfileVacationAction(vacation))
}))
class Profile extends Component {

  state = {
    manageVacationVisible: false
  }

  componentDidMount() {
    this.props.setNavLabel('Profile');
    this.props.fetchProfileData();
  }

  handleSubmitVacation = (vacation) => {
    this.props.submitProfileVacation(vacation);
    this.setState({ manageVacationVisible: false });
  }

  render() {
    let display = this.props.error;
    if (!this.props.error) {
      display = (
        <Fragment>
          <div style={{ display: this.state.manageVacationVisible && 'none' }}>
            <br/>
            My Requests
            <VacationList vacations={this.props.vacations} />
            <br/>
            <Button onClick={() => this.setState({ manageVacationVisible: true })}>Add Vacation</Button>
            <Button onClick={() => this.setState({ manageVacationVisible: true })}>Add Sick Leave</Button>
          </div>
          <div style={{ display: !this.state.manageVacationVisible && 'none' }}>
            <ManageVacation onSubmit={this.handleSubmitVacation} onClose={() => this.setState({ manageVacationVisible: false })} />
          </div>
        </Fragment>
      );
    }
    return (
      <BasePage className="Profile">
        {display}
      </BasePage>
    );
  }
}

export default Profile;
