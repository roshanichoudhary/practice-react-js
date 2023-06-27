import './App.css';
import Profile from './Components/Profile';
import ShoppingList from './Components/ShoppingList';

function App() {
  return (
    <>
      <Profile />
      <div style={{width: '320px', borderBottom: '1px solid black'}} />
      <ShoppingList />
    </>
  );
}

export default App;
