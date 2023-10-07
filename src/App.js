import "./App.css";
import React, { createContext } from "react";
import Profile from "./Components/Profile";
import ShoppingList from "./Components/ShoppingList";
import UseState from "./Components/UseState";
import UseEffect from "./Components/UseEffect";
import PropsPractice from "./Components/PropsPractice";
import info from "./Components/info";
import MapFunction from "./Components/MapFunction";
import IfCondition from "./Components/IfCondition";
import AndOperator from "./Components/AndOperator";
import TernaryOp from "./Components/TernaryOp";
import ClassComponent from "./Components/ClassComponent";
import FunctionComponent from "./Components/FunctionComponent";
import Garag from "./Components/Garag";
import Event from "./Components/Event";
import List from "./Components/List";
import Form from "./Components/Form";
import UseReducer from "./Components/UseReducer";
import UseRef from "./Components/UseRef";
import UseCallback from "./Components/UseCallback";
import UseMemo from "./Components/UseMemo";
import BackwardCounter from "./Components/BackwardCounter";
import ForwardCounter from "./Components/ForwardCounter";
import ComponentA from "./Components/ComponentA";

function createMap(info) {
  return (
    <div>
      <MapFunction name={info.name} number={info.number} />
    </div>
  );
}
const PersonContext = createContext();

function App() {
  const carInfo = {
    name: "Ford",
    modal: "Mustand",
  };

  const personName = "John Doe";

  return (
    <div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Class Component</h2>
        <ClassComponent modal="Mustang" color="red" />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Function Component</h2>
        <FunctionComponent modal="Mustang" color="red" />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>How to add Style, Image and alt dynamically in react</h2>
        <Profile />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Props</h2>
        <PropsPractice name="Bob" age="20" />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Map Function Example</h2>
        {info.map(createMap)}
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>If Condition Example</h2>
        <IfCondition />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>And Operator Example</h2>
        <AndOperator />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Ternary Operator Example</h2>
        <TernaryOp />
      </div>
      <Garag brand={carInfo} />;
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Events</h2>
        <Event />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>List</h2>
        <List />
        <ShoppingList />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Form</h2>
        <Form />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useState Hook</h2>
        <UseState />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useEffect Hook</h2>
        <UseEffect />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useContext Hook</h2>
        <PersonContext.Provider value={personName}>
          <p className="clr">Hello {personName}</p>
          <ComponentA />
        </PersonContext.Provider>
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useReducer Hook</h2>
        <UseReducer />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useRef Hook</h2>
        <UseRef />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useCallback Hook</h2>
        <UseCallback />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>useMemo Hook</h2>
        <UseMemo />
      </div>
      <div style={{ borderTop: "1px solid #000" }}>
        <h2>Custom Hook</h2>
        <ForwardCounter />
        <BackwardCounter />
      </div>
    </div>
  );
}

export default App;
export { PersonContext };
