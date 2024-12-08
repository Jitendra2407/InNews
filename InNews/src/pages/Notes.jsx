import React, { useState, useEffect } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi"; // Import delete icon

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentContent, setCurrentContent] = useState("");
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);

  const API_URL = "http://localhost:5000/api/notes";

  // Fetch notes on component mount
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          console.error(`Error: ${response.status} - ${response.statusText}`);
          const errorText = await response.text();
          console.error("Unexpected response from server:", errorText);
          return;
        }

        const data = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  // Add a new note
  const addNote = async () => {
    if (currentTitle.trim() === "" || currentContent.trim() === "") return;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: currentTitle,
          content: currentContent,
        }),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const newNote = await response.json();
      setNotes([...notes, newNote]);
      setCurrentTitle("");
      setCurrentContent("");
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Save the edited note
  const saveNote = async () => {
    if (selectedNoteIndex === null) return;

    const selectedNote = notes[selectedNoteIndex];

    try {
      const response = await fetch(`${API_URL}/${selectedNote._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          title: currentTitle,
          content: currentContent,
        }),
      });

      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        return;
      }

      const updatedNote = await response.json();
      const updatedNotes = [...notes];
      updatedNotes[selectedNoteIndex] = updatedNote;
      setNotes(updatedNotes);
    } catch (error) {
      console.error("Error saving note:", error);
    }
  };

  // Delete a note
  const deleteNote = async (index) => {
    const selectedNote = notes[index];
    if (!selectedNote || !selectedNote._id) {
      console.error("Note ID is missing or invalid.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${selectedNote._id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          `Failed to delete note: ${response.status} - ${errorText}`
        );
        return;
      }

      setNotes(notes.filter((_, i) => i !== index));
      setCurrentTitle("");
      setCurrentContent("");
      setSelectedNoteIndex(null);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Select a note
  const selectNote = (index) => {
    setSelectedNoteIndex(index);
    setCurrentTitle(notes[index].title);
    setCurrentContent(notes[index].content);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Notes</h1>
        <button
          className="flex items-center gap-2 bg-indigo-500 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-600 transition"
          onClick={addNote}
        >
          <IoMdAddCircleOutline size={24} /> Add Note
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-grow gap-6">
        <aside className="w-1/3 bg-white rounded-lg shadow-md overflow-y-auto">
          {notes.map((note, index) => (
            <div
              key={note._id}
              className={`p-4 border-b flex items-center justify-between cursor-pointer ${
                index === selectedNoteIndex ? "bg-indigo-100" : ""
              }`}
              onClick={() => selectNote(index)}
            >
              <div>
                <h4 className="font-semibold">{note.title}</h4>
                <p>{new Date(note.date).toLocaleDateString()}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering `selectNote`
                  deleteNote(index);
                }}
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          ))}
        </aside>
        <section className="w-2/3 bg-white rounded-lg shadow-md p-6">
          <input
            type="text"
            placeholder="Title"
            value={currentTitle}
            onChange={(e) => setCurrentTitle(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Content"
            value={currentContent}
            onChange={(e) => setCurrentContent(e.target.value)}
            className="w-full h-64 p-3 border rounded-lg"
          />
          <button
            onClick={saveNote}
            className="bg-indigo-500 text-white px-4 py-2 mt-4"
          >
            Save Note
          </button>
        </section>
      </div>
    </div>
  );
};

export default Notes;
