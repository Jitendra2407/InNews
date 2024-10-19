const Note = require("../models/note model")

const noteData = async (req, res) => {
  try {
    const response = req.body;
    await Note.create(response);
    return res.status(200).json({message: "notes taken successfully"});
  } catch (error) {
    return res.status(500).json({message: "notes not delivered"});
  }
}

module.exports = noteData;