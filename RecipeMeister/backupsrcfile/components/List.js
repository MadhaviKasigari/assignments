// List Component
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = ({ label, onUpdate, value }) => {
  const [items, setItems] = useState(value);
  const addItems = (e) => {
    if (e.keyCode === 13) {
      let updatedItems = [...items, { id: uuidv4(), label: e.target.value }];
      setItems(updatedItems);
      onUpdate(updatedItems);
      e.target.value = "";
    }
  };
  const removeitems = (itemid) => {
    let updatedItems = items.filter(({ id }) => id !== itemid);
    setItems(updatedItems);
    onUpdate(updatedItems);
  };
  return (
    <div className="list">
      <span className="label">{label}</span>
      <input
        type="text"
        onKeyUp={addItems}
        placeholder="Type and press enter..."
      />
      {items &&
        items.map(({ id, label }) => (
          <div className="list-item" key={id}>
            {label.toUppercase()}
            <span className="rem-item-btn" onClick={() => removeitems(id)}>
              X
            </span>
          </div>
        ))}
    </div>
  );
};

export default List;
