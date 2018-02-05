import React from 'react';
import { InputText } from 'primereact/components/inputtext/InputText';

import './Input.css';

const input = ({ id, name, label, type = "text", onChange, value }) => (
  <span className="Input">
    <label htmlFor={id}>{label}</label>
    <InputText id={id} name={name} type={type} size="30" onChange={onChange} value={value} />
  </span>
);

export default input;
