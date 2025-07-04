import  { useState, useEffect } from "react";
import "./App.css";

const Forms = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

  // Save users to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return alert("Please fill all fields.");

    if (editIndex !== null) {
      const updated = [...users];
      updated[editIndex] = form;
      setUsers(updated);
      setEditIndex(null);
    } else {
      setUsers([...users, form]);
    }

    setForm({ name: "", email: "" });
  };

  const handleEdit = (index) => {
    setForm(users[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  return (
    <div className="container">
      <h2>React CRUD with Local Storage</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>
      </form>

      <ul className="user-list">
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          users.map((user, index) => (
            <li key={index}>
              <strong>{user.name}</strong> - {user.email}
              <div className="actions">
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Forms;
