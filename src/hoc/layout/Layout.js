import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from '../../components/Navigation/Navigation';

import './Layout.css';

@connect(store => ({
  nav_label: store.navigation.get('nav_label')
}))
class Layout extends Component {

  render() {
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
