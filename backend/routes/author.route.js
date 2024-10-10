const express = require("express");
const router = express.Router();
const Author = require("../models/author");
const multer = require("multer");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

filename = "";
// upload images:
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../imgs/")); // Ensure the "imgs" directory exists
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname); // Create a unique filename using a timestamp
  }
});

const upload = multer({ storage });

// ...........

router.post("/register", upload.any("image"), (req, res) => {
  const author = new Author(req.body);

  let images;
  if (req.files && req.files.length > 0) {
    images = req.files.map(file => file.filename);
  } else {
    images = [];
  }
  author.image = images.length > 0 ? images[0] : "";

  salt = bcrypt.genSaltSync(10); // 10 characters
  author.password = bcrypt.hashSync(req.body.password, salt);

  author
    .save()
    .then(savedAuthor => res.status(200).json(savedAuthor))
    .catch(err => res.status(400).send(err));
});
//..................................................

router.post("/login", async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Email and password are required");
    }

    const author = await Author.findOne({ email });
    if (!author) {
      return res.status(400).send("Email not found");
    }

    const isValid = await bcrypt.compare(password, author.password);

    if (!isValid) {
      return res.status(400).send("Email or password is invalid");
    }

    // For the JWT:
    const payload = {
      _id: author.id,
      email: author.email,
      fullname: `${author.name} ${author.lastname}`
    };

    // to generate the JWT token
    const token = jwt.sign(payload, "12345");

    res.status(200).send({ myToken: token });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send("Internal server error");
  }
});
//..................................................

router.get("/", (req, res) => {
  Author.find()
    .then(articles => res.status(200).send(articles))
    .catch(err => res.status(400).send(err));
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Author.findById((_id = id))
    .then(article => res.status(200).send(article))
    .catch(err => res.status(400).send(err));
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const article = await Author.findByIdAndDelete(id);

    if (!article) {
      return res.status(404).send("Article not found");
    }
    res.status(200).json(article);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
