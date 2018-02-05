import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNavLabelAction } from 'store/actions';

@connect(null, dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text))
}))
class Users extends Component {

  componentDidMount() {
    this.props.setNavLabel('Users');
  }

  render() {
    return (
      <div>
        Users Page
      </div>
    );
  }
}

export default Users;
