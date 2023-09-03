require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("Hello from nodejs");
  res.end();
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
