import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Profile from './containers/Profile/Profile';
import ManageEmployee from './containers/ManageEmployee/ManageEmployee';
import ViewEmployee from './containers/ViewEmployee/ViewEmployee';
import EmployeeTable from './containers/EmployeeTable/EmployeeTable';
import Login from './containers/Login/Login';

const routes = () => (
  <React.Fragment>
    <Switch>
      {
        window.localStorage.token ?
        (<Fragment>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/employees" component={EmployeeTable} />
            <Route exact path="/manage" component={ManageEmployee} />
            <Route exact path="/manage/:id" component={ManageEmployee} />
            <Route exact path="/view/:id" component={ViewEmployee} />
            <Redirect from="/" to="/profile" />
        </Fragment>) :
        <Route component={Login} />
      }
    </Switch>
  </React.Fragment>
);

export default routes;
