import "../styles/Tabs.css";

export default function Tabs({ activeTab, setActiveTab }) {
  return (
    <div className="tabs">
      <button
        className={activeTab === "add" ? "tab active" : "tab"}
        onClick={() => setActiveTab("add")}
      >
        🧺 Add Items
      </button>

      <button
        className={activeTab === "buy" ? "tab active" : "tab"}
        onClick={() => setActiveTab("buy")}
      >
        🛒 To Be Bought
      </button>
    </div>
  );
}
