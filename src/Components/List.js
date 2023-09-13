import React from "react";

const List = () => {
  const fruits = [
    { name: "Apple", isFruit: true, id: 1 },
    { name: "Papaya", isFruit: true, id: 2 },
    { name: "Garlic", isFruit: false, id: 3 },
  ];

  const listItem = fruits.map((fruit) => (
    <li key={fruit.id} style={{ color: fruit.isFruit ? "red" : "black" }}>
      {fruit.name}
    </li>
  ));

  return (
    <div>
      <ul style={{ borderTop: "1px solid #000" }}>{listItem}</ul>
    </div>
  );
};

export default List;
