// NoteModal.js
import React, { useState } from "react";
import styles from "./NoteModal.module.css";

const NoteModal = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add a New Note</h2>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />
        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.contentInput}
        />
        <div className={styles.modalActions}>
          <button
            className={styles.saveButton}
            onClick={() => {
              onSave(title, content);
              setTitle("");
              setContent("");
            }}
          >
            Save
          </button>
          <button className={styles.cancelButton} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
