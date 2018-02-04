import React from 'react';

import DisplayRow from './DisplayRow';

const employeeBalance = ({ employee }) => {
  return (
    <div>
        <DisplayRow label="Working since">
            {employee.startDateFormatted}
        </DisplayRow>
        <DisplayRow label="Days per year">
            {20}
        </DisplayRow>
        <div className="gigantic">{employee.balanceFormatted}</div>
    </div>);
};

export default employeeBalance;
