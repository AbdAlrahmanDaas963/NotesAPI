const Note = require("../models/Note");

module.exports = {
  // ? Worked
  createNote: async (req, res) => {
    const newNote = new Note(req.body);
    try {
      await newNote.save();
      res.status(200).json("Note created successfully :)");
    } catch (error) {
      res.status(500).json("Failed to create Note :(");
    }
  },
  // ? Worked
  getAllNotes: async (req, res) => {
    try {
      const notes = await Note.find().sort({ createdAt: -1 });
      res.status(200).json(notes);
    } catch (error) {
      res.status(500).json("Failed to get Notes :(");
    }
  },
  // ? Worked
  getNote: async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      res.status(200).json(note);
    } catch (error) {
      res.status(500).json("Failed to get the Note :(");
    }
  },
  deleteNote: async (req, res) => {
    try {
      const noteId = req.params.id;
      const deletedNote = await Note.findByIdAndRemove(noteId);

      if (!deletedNote) return res.status(404).json("Note not found :(");
      res.status(200).json("Note deleted successfully :)");
    } catch (error) {
      res.status(500).json("Failed to delete the Note :(");
    }
  },
};
