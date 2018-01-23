import React from 'react';

import './Header.css';

const header = ({ title }) => {
  return (
    <header className="Header">
      {title}
    </header>
  );
}

export default header;
