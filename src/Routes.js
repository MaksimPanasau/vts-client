import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Profile from 'containers/Profile/Profile';
import Users from 'containers/Users/Users';
import Vacations from 'containers/Vacations/Vacations';
import ManageEmployee from 'containers/ManageEmployee/ManageEmployee';
import ViewEmployee from 'containers/ViewEmployee/ViewEmployee';
import EmployeeTable from 'containers/EmployeeTable/EmployeeTable';
import Login from 'containers/Login/Login';

const routes = () => (
  window.localStorage.token ?
  (
    <Switch>
      <Route exact path="/users" component={Users} />
      <Route exact path="/vacations" component={Vacations} />
      <Route exact path="/employees" component={EmployeeTable} />
      <Route exact path="/manage" component={ManageEmployee} />
      <Route exact path="/manage/:id" component={ManageEmployee} />
      <Route exact path="/view/:id" component={ViewEmployee} />
      <Route path="/profile" component={Profile} />
      <Redirect from="/" to="/profile" />
    </Switch>
  ) :
  (
    <Switch>
      <Route component={Login} />
    </Switch>
  )
);

export default routes;
