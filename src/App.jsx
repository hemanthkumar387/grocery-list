import { useEffect, useState } from "react";
import GroceryList from "./components/GroceryList";
import ToBuyList from "./components/ToBuyList";
import Tabs from "./components/Tabs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("add");
  const [toBuyList, setToBuyList] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("toBuyList"));
    if (stored) setToBuyList(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("toBuyList", JSON.stringify(toBuyList));
  }, [toBuyList]);

  const addItem = (item) => {
    const exists = toBuyList.find((i) => i.id === item.id);
    if (exists) {
      setToBuyList(
        toBuyList.map((i) =>
          i.id === item.id ? { ...i, quantity: item.quantity } : i
        )
      );
    } else {
      setToBuyList([...toBuyList, item]);
    }
    setActiveTab("buy"); // UX improvement
  };

  const removeItem = (id) => {
    setToBuyList(toBuyList.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setToBuyList(
      toBuyList.map((i) =>
        i.id === id ? { ...i, quantity } : i
      )
    );
  };

  return (
    <div className="app">
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />
      <h1 className="grocery-heading">🛒 Grocery Reminder</h1>

      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="content">
        {activeTab === "add" && <GroceryList onAdd={addItem} />}
        {activeTab === "buy" && (
          <ToBuyList
            items={toBuyList}
            onRemove={removeItem}
            onUpdate={updateQuantity}
          />
        )}
      </div>
    </div>
  );
}
