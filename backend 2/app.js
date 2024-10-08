const express = require("express");
const app = express();
const PORT = 5000;
require("./config/connect");
const articleRoute = require("./routes/article.route");
const authorRoute = require("./routes/author.route");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // using form url encoded [such in insomnia tool]

// ................
// to start from path: article
app.use("/articles", articleRoute);
app.use("/authors", authorRoute);

// end point: to get images from its directory for frontend
app.use("/getImage", express.static("./imgs"));
// ..........

app.listen(PORT, () => {
  console.log(`server works at http://localhost:${PORT}`);
});
