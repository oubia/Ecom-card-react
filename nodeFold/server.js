const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const robots = require("./routes/robot"); //to create separet routers

app.use("/robot", robots);

app.listen(3001, () => {
  console.log("Server is running");
});
