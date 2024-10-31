//load env variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
//import dependencies
const express = require("express");
var cors = require("cors");
const connectToDb = require("./config/connectToDb");
const notesController = require("./controllers/notesController");

//create an express app
const app = express();

//configure express app to read JSON
app.use(express.json());
app.use(cors());

//connect to DB
connectToDb();

// ROUTING:

//get notes
app.get("/notes", notesController.fetchNotes);

//get single note
app.get("/notes/:id", notesController.fetchNote);

//add
app.post("/notes", notesController.createNote);

//update
app.put("/notes/:id", notesController.updateNote);

//delete
app.delete("/notes/:id", notesController.deleteNote);

//start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
