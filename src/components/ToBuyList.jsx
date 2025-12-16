import ToBuyItem from "./ToBuyItem";
import "../styles/ToBuyList.css";

export default function ToBuyList({ items, onRemove, onUpdate }) {
  return (
    <div className="to-buy-list">
      <h2>
        To Be Bought{" "}
        <span className="item-count">({items.length})</span>
      </h2>

      {items.length === 0 && <p>No items added</p>}

      {items.map((item) => (
        <ToBuyItem
          key={item.id}
          item={item}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
}
