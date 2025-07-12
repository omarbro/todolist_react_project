import React from "react";

function Todo(props) {
  return (
    <div
      onClick={() => {
        return props.onChecked(props.id);
      }}
    >
      <li>{props.itemName}</li>
    </div>
  );
}

export default Todo;
