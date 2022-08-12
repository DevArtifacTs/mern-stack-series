const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  const foundNote = notes.find((note) => note._id === id);
  console.log("foundNote", foundNote, "id", id);
  res.send(foundNote);
});

const PORT = process.env.PORT || 5500;

app.listen(PORT, console.log(`app is starting on PORT = ${PORT}`));
