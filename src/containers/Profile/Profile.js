import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Card } from 'primereact/components/card/Card';

import Button from 'components/common/Button/Button';
import BasePage from '@/hoc/layout/BasePage';
import { setNavLabelAction } from 'reducers/navigation/navigationActions';
import { fetchProfileDataAction, submitProfileVacationAction } from '../../reducers/profile/profileActions';
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
          <Card style={{ display: this.state.manageVacationVisible && 'none' }}>
            My Requests
            <VacationList vacations={this.props.vacations} />
            <br/><br/>
            <Button onClick={() => this.setState({ manageVacationVisible: true })}>Add Vacation</Button>
            <Button onClick={() => this.setState({ manageVacationVisible: true })}>Add Sick Leave</Button>
          </Card>
          <Card style={{ display: !this.state.manageVacationVisible && 'none' }}>
            <ManageVacation onSubmit={this.handleSubmitVacation} onClose={() => this.setState({ manageVacationVisible: false })} />
          </Card>
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
