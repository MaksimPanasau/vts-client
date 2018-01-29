import React from 'react';
import { Button } from 'primereact/components/button/Button';

import './Button.css';

const button = ({ onClick, className, children }) => {
  return <Button onClick={onClick} className={'Button ' + className || ''} >{children}</Button>
}

export default button;
