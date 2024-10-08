// D:\NTI\NTI Graduation Project\backend\models\author.js

const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  description: String,
  email: {
    type: String,
    unique: true
  },
  password: String,
  about: String,
  image: String
});

const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

module.exports = Author;
