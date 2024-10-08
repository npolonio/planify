import "./App.css";
import React, { useState, useEffect, ChangeEvent, FormEvent, MouseEvent } from 'react';

interface Note {
  id: number;
  title: string;
  content: string;
}

const App: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  useEffect(() => {
    fetch("http://localhost:3001/api/notes")
      .then(response => response.json())
      .then(data => setNotes(data.notes));
  }, []);

  const handleNoteClick = (note: Note) => {
    setSelectedNote(note);
    setTitle(note.title);
    setContent(note.content);
  };

  const handleAddNote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newNote: Omit<Note, 'id'> = { title, content };

    fetch("http://localhost:3001/api/notes", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newNote)
    })
    .then(response => response.json())
    .then(data => {
      setNotes([data, ...notes]);
      setTitle("");
      setContent("");
    });
  };

  const handleUpdateNote = (event: FormEvent) => {
    event.preventDefault();

    if (!selectedNote) {
      return;
    }

    const updatedNote = { title, content };

    fetch(`http://localhost:3001/api/notes/${selectedNote.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedNote)
    })
    .then(() => {
      const updatedNotesList = notes.map((note) => 
        note.id === selectedNote.id ? { ...note, title, content } : note
      );
      setNotes(updatedNotesList);
      setTitle("");
      setContent("");
      setSelectedNote(null);
    });
  };

  const handleCancel = () => {
    setTitle("");
    setContent("");
    setSelectedNote(null);
  };

  const deleteNote = (event: MouseEvent<HTMLButtonElement>, noteId: number) => {
    event.stopPropagation();

    fetch(`http://localhost:3001/api/notes/${noteId}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
    });
  };

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={(event) => (selectedNote ? handleUpdateNote(event) : handleAddNote(event))}>
        <input
          value={title}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
          placeholder="Title"
          required
        ></input>
        <textarea
          value={content}
          onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        ></textarea>
        {selectedNote ? (
          <div className="edit-buttons">
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        ) : (
          <button type="submit">Add Note</button>
        )}
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item" key={note.id} onClick={() => handleNoteClick(note)}>
            <div className="notes-header">
              <button onClick={(event) => deleteNote(event, note.id)}>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

