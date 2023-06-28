import React, { useState } from "react";

const UseState = () =>{
    const [click, setClick] = useState(0);

    return (
        <div style={{borderTop: '1px solid #000'}}>
            <h2>Use State example</h2>
            <p>You clicked {click} times</p>
            <p>Number of times you clicked is {click % 2 == 0 ? 'even!' : 'odd!'}</p>
            <button onClick={ () => setClick(click => click + 1) }>Click Me</button>
        </div>
    )

}

export default UseState;