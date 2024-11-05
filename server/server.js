const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory storage
let items = [];

// GET /items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST /items
app.post('/items', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: 'Item name is required' });
  }

  const newItem = { id: uuidv4(), name };
  items.push(newItem);
  res.status(201).json(newItem);
});

// Error handling
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(PORT, () => console.log(`API Server running on http://localhost:${PORT}`));
