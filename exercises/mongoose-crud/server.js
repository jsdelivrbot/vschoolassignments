const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 7000
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use('/pets', require("./routes/petRoutes"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/pet-adoption", (err) =>{
    if (err) throw err;
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
})
