const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  //find the notes
  const notes = await Note.find();

  //respond with them
  res.json({ notes });
};

const fetchNote = async (req, res) => {
  //get id off the url
  const noteId = req.params.id;
  //find the note using that id
  const note = await Note.findById(noteId);
  //respond with the note
  res.json({ note });
};

const createNote = async (req, res) => {
  //get the sent in data off reqest body
  const { title, body } = req.body;

  //create a note with it
  const note = await Note.create({
    title,
    body,
  });

  //respond with the new note
  res.json({ note });
};

const updateNote = async (req, res) => {
  //get the id off the url
  const noteId = req.params.id;
  //get the data off the request body
  const { title, body } = req.body;

  //find and update the record
  await Note.findByIdAndUpdate(noteId, {
    title,
    body,
  });
  //find the updated note
  const note = await Note.findById(noteId);
  //respond with it
  res.json({ note });
};

const deleteNote = async (req, res) => {
  //get id off the url
  const noteId = req.params.id;
  //delete the record
  const result = await Note.deleteOne({ _id: noteId });
  // Check if a document was deleted
  if (result.deletedCount === 0) {
    return res.status(404).json({ error: "Note not found." });
  }
  //respond
  res.json({ success: "Record deleted." });
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
