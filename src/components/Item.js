export default function Item({ item, onDeleteItemPassed, onToggleItemPassed }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItemPassed(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItemPassed(item.id)}>❌</button>
    </li>
  );
}
