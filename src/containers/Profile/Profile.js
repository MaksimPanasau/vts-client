import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from 'components/common/Button/Button';
import BasePage from '@/hoc/layout/BasePage';
import { setNavLabelAction, fetchProfileDataAction, submitProfileVacationAction } from 'store/actions';
import ManageVacation from './ManageVacation/ManageVacation';
import VacationList from 'components/VacationList/VacationList';

import './Profile.css';

const formatBalance = (balance) => {
    if (!balance) {
        return '0 Days';
    }
    const days = Math.floor(balance / 8);
    const hours = balance % 8;
    return hours ? `${days} Days ${hours} Hours` : `${days} Days`;
}

@connect(store => ({
    employee: store.profile.get('employee'),
    vacations: store.profile.get('vacations'),
    balance: store.profile.get('balance'),
    error: store.profile.get('error')
}),
dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text)),
  fetchProfileData: () => dispatch(fetchProfileDataAction()),
  submitProfileVacation: (vacation) => dispatch(submitProfileVacationAction(vacation))
}))
class Profile extends Component {

  state = {
    manageVacationVisible: false,
    managedVacationType: 'VACATION',
  }

  componentDidMount() {
    this.props.setNavLabel('Profile');
    this.props.fetchProfileData();
  }

  handleSubmitVacation = (vacation) => {
    this.props.submitProfileVacation(vacation);
    this.setState({ manageVacationVisible: false });
  }

  showManageVacation = (type) => {
    this.setState({ manageVacationVisible: true, managedVacationType: type });
  }

  handleManageClose = () => {
    this.setState({ manageVacationVisible: false });
  }

  render() {
    let display = this.props.error;
    if (!this.props.error && this.props.employee) {
      display = (
        <div>
          <div class="ui-g Profile-Header" style={{ display: this.state.manageVacationVisible && 'none' }}>
            <div class="ui-g-6">{formatBalance(this.props.balance)}</div>
            <div class="ui-g-6">
              <Button onClick={() => this.showManageVacation('VACATION')}>Add Vacation</Button>
              <Button onClick={() => this.showManageVacation('DAYOFF')}>Add Day Off</Button>
            </div>
          </div>
          <div style={{ display: !this.state.manageVacationVisible && 'none' }}>
            <ManageVacation onSubmit={this.handleSubmitVacation} onClose={this.handleManageClose} type={this.state.managedVacationType} />
          </div>
          <VacationList vacations={this.props.vacations} />
        </div>
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
