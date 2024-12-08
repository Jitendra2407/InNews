// const Note = require("../models/note model")

// const noteData = async (req, res) => {
//   try {
//     const response = req.body;
//     await Note.create(response);
//     return res.status(200).json({message: "notes taken successfully"});
//   } catch (error) {
//     return res.status(500).json({message: "notes not delivered"});
//   }
// }

// module.exports = noteData;




const Note = require("../models/note-model");

// Fetch all notes for the logged-in user
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).send("Server Error");
  }
};

// Create a new note
const createNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({
      userId: req.user.id,
      title,
      content,
    });
    const note = await newNote.save();
    res.json(note);
  } catch (error) {
    console.error("Error creating note:", error);
    res.status(500).send("Server Error");
  }
};

// Update an existing note
const updateNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found");

    if (note.userId.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    res.json(note);
  } catch (error) {
    console.error("Error updating note:", error);
    res.status(500).send("Server Error");
  }
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).send("Note not found");

    if (note.userId.toString() !== req.user.id) {
      return res.status(401).send("Unauthorized");
    }

    await Note.findByIdAndRemove(req.params.id);
    res.json({ message: "Note removed" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).send("Server Error");
  }
};

module.exports = { getNotes, createNote, updateNote, deleteNote };
