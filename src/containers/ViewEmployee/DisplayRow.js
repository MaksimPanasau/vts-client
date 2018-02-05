import React from 'react';

const displayRow = ({ label, children }) => (
    <div>
        <div sm={4} >
            <span style={{ fontWeight: 'bold' }}>
                {label}
            </span>
        </div>
        <div sm={8}>{children}</div>
    </div>
);

export default displayRow;
