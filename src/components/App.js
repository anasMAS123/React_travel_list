import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";

import Stats from "./Stats";
// or via CommonJS
// const Swal = require("sweetalert2");

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "soap", quantity: 4, packed: true },
// ];

export default function App() {
  const [items, setItems] = useState([]);
  function addNewItem(newItem) {
    setItems([...items, newItem]);
  }
  function deleteItem(id) {
    setItems(() => items.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems(() =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    let confirmed = window.confirm("Are you sure you want the whole list ???");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={addNewItem} />
      <PackingList
        items={items}
        setItems={setItems}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
