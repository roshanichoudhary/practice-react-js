import React from 'react';

const PropsPractice = (props) => {
    return (
        <div style={{ borderTop: '1px solid #000' }}>
            <h2>Props Example</h2>
            <h4>Hello this is {props.name}</h4>
            <p>My age is {props.age}</p>
        </div>
    )
}

export default PropsPractice;