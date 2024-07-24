const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database('database.db'); // Use file-based database

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )`);
});

// Endpoint to get all notes
app.get('/api/notes', (req, res) => {
  db.all("SELECT * FROM notes", [], (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ notes: rows });
  });
});

// Endpoint to add a new note
app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;
  db.run(`INSERT INTO notes (title, content) VALUES (?, ?)`, [title, content], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID, title, content });
  });
});

// Endpoint to update a note
app.put('/api/notes/:id', (req, res) => {
  const { title, content } = req.body;
  db.run(`UPDATE notes SET title = ?, content = ? WHERE id = ?`, [title, content, req.params.id], function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ id: req.params.id, title, content });
  });
});

// Endpoint to delete a note
app.delete('/api/notes/:id', (req, res) => {
  db.run(`DELETE FROM notes WHERE id = ?`, req.params.id, function(err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({ message: 'Deleted successfully' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
