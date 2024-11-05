import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      setItems(response.data);
    } catch (err) {
      setError('Failed to load items');
    }
  };

  const addItem = async (e) => {
    e.preventDefault();
    if (!newItemName) {
      setError('Item name cannot be empty');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/items', { name: newItemName });
      setItems([...items, response.data]);
      setNewItemName('');
      setError(null);
    } catch (err) {
      setError('Failed to add item');
    }
  };

  return (
    <div>
      <h1>Item List</h1>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Enter item name"
        />
        <button type="submit">Add Item</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>      
    </div>
  );
}

export default App;
