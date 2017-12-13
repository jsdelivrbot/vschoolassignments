const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/inventory", require("./routes/inventoryRoutes"));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/inventory", (err) => {
    if (err) throw err;
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
