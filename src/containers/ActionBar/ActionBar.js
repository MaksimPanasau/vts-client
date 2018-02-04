import React from 'react';

const actionBar = (props) => (
    <div style={{ marginBottom: '5px' }} >
        <div>
            {props.left}
        </div>
        {' '}
        <div>
            {props.right}
        </div>
    </div>
);

export default actionBar;
