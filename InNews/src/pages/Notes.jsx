import React, { useState } from "react";
import styles from "./Notes.module.css";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

const Notes = () => {

  const URL = "http://localhost:5000/api/data/note";

  const [notes, setNotes] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  console.log(notes);

  // Add new note
  const addNote = async () => {
    if (currentTitle.trim() === "" || currentContent.trim() === "") return;
    const newNote = {
      title: currentTitle,
      content: currentContent,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
    setCurrentTitle("");
    setCurrentContent("");
    setSelectedNoteIndex(newNotes.length - 1);

    try {
      const response = await fetch(URL, {
        method: 'POST',
        
      })
    } catch (error) {
      
    }
  };

  // Select note to edit
  const selectNote = (index) => {
    setCurrentTitle(notes[index].title);
    setCurrentContent(notes[index].content);
    setSelectedNoteIndex(index);
  };

  // Save edited note
  const saveNote = () => {
    if (selectedNoteIndex !== null) {
      const newNotes = [...notes];
      newNotes[selectedNoteIndex] = {
        ...newNotes[selectedNoteIndex],
        title: currentTitle,
        content: currentContent,
      };
      setNotes(newNotes);
    }
  };

  // Delete note
  const deleteNote = (index) => {
    const newNotes = notes.filter((_, i) => i !== index);
    setNotes(newNotes);
    if (index === selectedNoteIndex) {
      setCurrentTitle("");
      setCurrentContent("");
      setSelectedNoteIndex(null);
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Notes</h1>
        <button className={styles.addButton} onClick={addNote}>
          <IoMdAddCircleOutline size={30} /> Add Note
        </button>
      </header>

      <div className={styles.main}>
        <aside className={styles.noteList}>
          {notes.map((note, index) => (
            <div
              key={index}
              className={`${styles.noteItem} ${
                index === selectedNoteIndex ? styles.active : ""
              }`}
              onClick={() => selectNote(index)}
            >
              <div className={styles.noteHeader}>
                <h4 className={styles.noteTitle}>{note.title}</h4>
                <p className={styles.noteDate}>{note.date}</p>
              </div>
              <p className={styles.noteContent}>
                {note.content.slice(0, 50)}...
              </p>
              <button
                className={styles.deleteButton}
                onClick={(e) => {
                  e.stopPropagation();
                  deleteNote(index);
                }}
              >
                <FiTrash2 size={18} />
              </button>
            </div>
          ))}
        </aside>

        <section className={styles.noteEditor}>
          <input
            type="text"
            placeholder="Title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            className={styles.titleInput}
          />
          <textarea
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            placeholder="Write your note here..."
            className={styles.textarea}
          />
          <button className={styles.saveButton} onClick={saveNote}>
            Save Note
          </button>
        </section>
      </div>
    </div>
  );
};

export default Notes;