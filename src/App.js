import './App.css';
import React from 'react';
import Profile from './Components/Profile';
import ShoppingList from './Components/ShoppingList';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';
import PropsPractice from './Components/PropsPractice';
import info from './Components/info';
import MapFunction from './Components/MapFunction';
import IfCondition from './Components/IfCondition';
import AndOperator from './Components/AndOperator';
import TernaryOp from './Components/TernaryOp';

function createMap(info) {
  return (
    <div>
      <MapFunction name={info.name} number={info.number} />
    </div>
  )
}

function App() {
  return (
    <div>
      <Profile />
      <ShoppingList />
      <UseState />
      <UseEffect />
      <PropsPractice name="Bob" age="20" />

      <div style={{ borderTop: '1px solid #000' }}>
        <h2>Map Function Example</h2>
        {info.map(createMap)}
      </div>

      <div style={{ borderTop: '1px solid #000' }}>
        <h2>If Condition Example</h2>
        <IfCondition />
      </div>

      <div style={{ borderTop: '1px solid #000' }}>
        <h2>And Operator Example</h2>
        <AndOperator />
      </div>

      <div style={{ borderTop: '1px solid #000' }}>
        <h2>Ternary Operator Example</h2>
        <TernaryOp />
      </div>
    </div >
  );
}

export default App;
