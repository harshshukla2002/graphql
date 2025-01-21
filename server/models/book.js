const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: { type: String },
  genre: { type: String },
  authorId: { type: String },
});

module.exports = mongoose.model("book", bookSchema);
