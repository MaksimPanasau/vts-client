import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNavLabelAction } from '../../reducers/navigation/navigationActions';

@connect(null, dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text))
}))
class Profile extends Component {

  componentDidMount() {
    this.props.setNavLabel('Profile');
  }

  render() {
    return (
      <div>
        Profile Page

        <br/>
        - change password
        <br/>
        - crud own vacations
      </div>
    );
  }
}

export default Profile;
