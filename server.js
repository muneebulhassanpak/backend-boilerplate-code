require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.get("/", (req, res, next) => {});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
