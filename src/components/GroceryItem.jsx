import { useState } from "react";
import { toast } from "react-toastify";
import "../styles/GroceryItem.css";

export default function GroceryItem({ item, onAdd }) {
  const [quantity, setQuantity] = useState("");

  const handleAdd = () => {
    if (!quantity) {
      toast.error("Please select quantity");
      return;
    }

    onAdd({ ...item, quantity });
    toast.success("Item added successfully");

    setQuantity("");
  };

  return (
    <div className="grocery-item">
      <span>
        {item.name}
        <small style={{ display: "block", color: "#000", fontSize: "16px" }}>
          {item.teluguName}
        </small>
      </span>

      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      >
        <option value="" disabled>
          Select quantity
        </option>

        {item.units.map((u) => (
          <option key={u} value={u}>
            {u}
          </option>
        ))}
      </select>

      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
