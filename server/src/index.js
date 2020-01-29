/* eslint-disable linebreak-style */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const volleyBall = require("volleyball");
const path = require("path");
const rootRoute = require("./routes/rootRoute");
const schema = require("../Schema");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(volleyBall);
schema();
app.use(express.static(path.join(__dirname, "/", "../../build/")));
app.use(express.static(path.join(__dirname, "/", "../../admin/")));

app.use("/api/v1", rootRoute);

app.get("/", (req, res) => {
  res.sendfile(path.join(__dirname, "/", "../../build/index.html"));
});

app.get("*", (req, res) => {
  res.sendfile(path.join(__dirname, "/", "../../build/index.html"));
});

app.listen(port, () => {
  console.log(`server has started on ${port}`);
});
