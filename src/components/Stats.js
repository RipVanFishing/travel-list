export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list! 🚀 </em>
      </p>
    );
  const numItems = items.length;
  const checkedItems = items.filter((item) => item.packed).length;
  const percentItems = Math.round((checkedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {" "}
        {percentItems === 100
          ? "You ready to go ✈️"
          : `💼 You have already ${numItems} items from your list, and you already
          packed for ${checkedItems}(${percentItems}%) `}{" "}
      </em>
    </footer>
  );
}
