import { useState, useEffect } from "react";
import "./App.css";

const Forms = () => {
  const [name, setName] = useState("");

  // Load saved name from localStorage on first render
  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    }
  }, []);

  // Save name to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("name", name);
  }, [name]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Please enter a name.");
    localStorage.setItem("name", name);
    alert("Name saved to localStorage!");
  };

  const handleDelete = () => {
    localStorage.removeItem("name");
    setName("");
  };

  return (
    <div className="container">
      <h2>Single Input with Local Storage</h2>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={handleDelete} style={{ marginLeft: "10px" }}>
          Delete
        </button>
      </form>

      {name && (
        <div className="user-display">
          <p><strong>Saved Name:</strong> {name}</p>
        </div>
      )}
    </div>
  );
};

export default Forms;
