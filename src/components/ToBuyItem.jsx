import "../styles/ToBuyItem.css";

export default function ToBuyItem({ item, onRemove, onUpdate }) {
    return (
        <div className="to-buy-item">
            <span>
                {item.name}
                <small style={{ display: "block", color: "#000000ff", fontSize: "16px" }}>
                    {item.teluguName}
                </small>
            </span>


            <select
                value={item.quantity}
                onChange={(e) => onUpdate(item.id, e.target.value)}
            >
                {item.units.map((unit) => (
                    <option key={unit} value={unit}>
                        {unit}
                    </option>
                ))}
            </select>

            <button className="remove" onClick={() => onRemove(item.id)}>
                Delete
            </button>
        </div>
    );
}
