import React from 'react';

import Layout from './hoc/layout/Layout';
import Routes from './Routes';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';

import './App.css';

const app = () => (
  <Layout>
    <Routes />
  </Layout>
);

export default app;
