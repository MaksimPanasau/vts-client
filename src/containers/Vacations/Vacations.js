import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setNavLabelAction } from '../../reducers/navigation/navigationActions';

@connect(null, dispatch => ({
  setNavLabel: (text) => dispatch(setNavLabelAction(text))
}))
class Vacations extends Component {

  componentDidMount() {
    this.props.setNavLabel('Vacations');
  }

  render() {
    return (
      <div>
        Vacations Page
      </div>
    );
  }
}

export default Vacations;
