// const express = require("express");
// const path = require("path");

// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "page.html")); // Replace "index.html" with your file name
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });


const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
