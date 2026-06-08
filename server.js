const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  // USE res.send() here for raw text, NOT res.json()
  res.send("Hello, CI/CD Students!");
});

app.get("/name", (req, res) => {
  res.send("Ayomide Samson");
});
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

module.exports = app;
