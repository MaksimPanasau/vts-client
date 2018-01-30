import React from 'react';

import './IconButton.css';

const button = ({ onClick, icon = '', className = '' }) => {
  return <a hreh="#" onClick={onClick} className={`IconButton ${className} ${icon}`} />
}

export default button;
