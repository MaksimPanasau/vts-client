import React from 'react';
import { connect } from 'react-redux';

import { showSidebarAction } from 'store/actions';

import './MenuToggle.css';

@connect(null,
dispatch => ({
  showSidebar: () => dispatch(showSidebarAction())
}))
class MenuToggle extends React.Component {

  state = {
    sidebarVisible: false
  }

  render() {
    return (
      <div className="MenuToggle" >
        <i className="fa fa-bars" onClick={ this.props.showSidebar } />
      </div>
    );
  }
}

export default MenuToggle;
