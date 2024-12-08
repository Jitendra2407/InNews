// const { Schema, model } = require("mongoose");

// const noteSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   content: {
//     type: String,
//     required: true,
//     trim: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Note = new model("Note", noteSchema);
// module.exports = Note;



const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
