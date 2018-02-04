import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/logo.svg';

import MenuToggle from '../MenuToggle/MenuToggle';
import './Toolbar.css';

const toolbar = ( props ) => {
  const authClass = window.localStorage.token ? 'Auth' : 'NotAuth';
  return (
    <header className={`Toolbar ${authClass}`}>
      <div className="Toolbar-MenuToggle">
        <MenuToggle />
      </div>
      <div className="Toolbar-Link">
        <Link to="/profile">Vacation Tracking System</Link>
      </div>
      <div className="Toolbar-Logo">
          <img src={logo} className="Toolbar-logo" alt="logo" />
      </div>
    </header>
  );
};

export default toolbar;
