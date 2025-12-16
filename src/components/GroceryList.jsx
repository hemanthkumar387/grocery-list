import GroceryItem from "./GroceryItem";
import { groceries } from "../data/groceries";
import "../styles/GroceryList.css";

export default function GroceryList({ onAdd }) {
  return (
    <div className="grocery-list">
      <h2>Available Groceries</h2>

      {groceries.map((group) => (
        <div key={group.category}>
          <h3>{group.category}</h3>
          {group.items.map((item) => (
            <GroceryItem key={item.id} item={item} onAdd={onAdd} />
          ))}
        </div>
      ))}
    </div>
  );
}
