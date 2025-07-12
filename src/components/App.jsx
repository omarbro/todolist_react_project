import React from "react";
import Todo from "./Todo";

function App() {
  const [itemname, getText] = React.useState("");
  const [items, setItem] = React.useState([]);

  function gettingItem(event) {
    getText(event.target.value);
  }
  function setingItem() {
    setItem((preItem) => [...preItem, itemname]);
    getText("");
  }
  function deleteItem(id) {
    setItem((preV) => {
      return preV.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={gettingItem} type="text" value={itemname} />
        <button>
          <span onClick={setingItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <Todo
              key={index}
              id={index}
              itemName={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
