const { Schema, model } = require("mongoose");

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Note = new model("Note", noteSchema);
module.exports = Note;