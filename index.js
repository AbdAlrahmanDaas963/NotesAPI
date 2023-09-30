const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const noteRouter = require("./routes/notes");

const app = express();
const port = 3000;

app.use(cors());
dotenv.config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db connected"))
  .catch((err) => console.log(err));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/notes", noteRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
