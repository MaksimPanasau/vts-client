import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

import Navigation from '../../components/Navigation/Navigation';

import './Layout.css';

@connect(store => ({
  nav_label: store.navigation.get('nav_label')
}))
class Layout extends Component {

  render() {
    const roles = localStorage.token ? jwtDecode(localStorage.token).roles : [];
    return (
      <React.Fragment>
        <Navigation />
        <main className="Layout-main" >
          { this.props.children }
        </main>
      </React.Fragment>
    );
  }
}

export default Layout;
