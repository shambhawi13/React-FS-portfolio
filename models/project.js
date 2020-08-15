const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: String,
  date: { type: Date, default: Date.now },
  category: { type: String, required: true },
  gitLink: { type: String, required: true }
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
