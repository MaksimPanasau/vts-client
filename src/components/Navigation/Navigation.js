import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

@connect(
  store => ({
    navLabel: store.navigation.get('navLabel')
  })
)
class Navigation extends Component {
  render() {
    return window.localStorage.token ?
    (
      <Fragment>
        <Toolbar />
        <Header title={this.props.navLabel} />
        <SideDrawer />
        <Sidebar />
      </Fragment>
    ) : (
      <Fragment>
        <Toolbar />
      </Fragment>
    );
  }
}

export default Navigation;
