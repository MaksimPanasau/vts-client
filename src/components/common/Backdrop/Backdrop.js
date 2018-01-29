import React, { Component } from 'react';

import './Backdrop.css';

class Backdrop extends Component {

  state = {
    visible: this.props.visible || true
  }

  handleClick = () => {
    const visible = this.props.clicked();
    this.setState({ visible });
  }

  render() {
    return this.state.visible ? <div className="Backdrop" onClick={this.handleClick} /> : null;
  }
}

export default Backdrop;
