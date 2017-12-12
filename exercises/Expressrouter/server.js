const express = require("express");
const app = express();
const port = process.env.PORT || 8000;


app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
