export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items 🚀🚀</em>
      </p>
    );
  return (
    <footer className="stats">
      {percentage === 100 ? (
        "you know ready to go to the journey 🤩 "
      ) : (
        <em>
          you have {numItems} item in your list and you already picked
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
