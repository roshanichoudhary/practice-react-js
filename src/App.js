import './App.css';
import React from 'react';
import Profile from './Components/Profile';
import ShoppingList from './Components/ShoppingList';
import UseState from './Components/UseState';
import UseEffect from './Components/UseEffect';

function App() {
  return (
    <div>
      <Profile />
      <ShoppingList />
      <UseState />
      <UseEffect />
    </div>
  );
}

export default App;
