import React, { Fragment } from 'react';

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Sidebar from './Sidebar/Sidebar';

const navigation = () => {
  return (
    <Fragment>
      <Toolbar />
      <SideDrawer />
      <Sidebar />
    </Fragment>
  );
}

export default navigation;
