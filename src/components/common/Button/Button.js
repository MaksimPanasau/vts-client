import React from 'react';

import './Button.css';

const button = ({ onClick, className, children }) => {
  return <button onClick={onClick} className={'Button ' + className || ''} >{children}</button>
}

export default button;
