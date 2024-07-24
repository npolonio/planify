const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mydatabase.db'); // Change this line

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL
  )`);

  // Insert some test data if needed
  // const stmt = db.prepare("INSERT INTO notes (title, content) VALUES (?, ?)");

  // stmt.run("test note 1", "bla bla note1");
  // stmt.run("test note 2", "bla bla note2");
  // stmt.run("test note 3", "bla bla note3");
  // stmt.run("test note 4", "bla bla note4");
  // stmt.run("test note 5", "bla bla note5");
  // stmt.run("test note 6", "bla bla note6");

  // stmt.finalize();
});

module.exports = db;
