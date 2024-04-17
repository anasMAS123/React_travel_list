import { useState } from "react";
import Swal from "sweetalert2";

export default function Form({ onAddItems }) {
  function handleSubmit(e) {
    e.preventDefault(); // not to reload the page on submitting
    if (!description) {
      Swal.fire({
        title: "empty description",
        text: "write your item please",
        icon: "error",
      });
    } else {
      const newItem = { id: Date.now(), description, quantity, packed: false };
      onAddItems(newItem);
      setDescription("");
      setQuantity(1);
    }
  }
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What you need for tour trip 😍</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
