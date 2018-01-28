import React from 'react';

import './BasePage.css';

const basePage = ({ children, className }) => {

  return (
    <div className={'BasePage ' + className}>
      { children }
    </div>
  );
}

export default basePage;
