const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");
// for using api
app.use(express.json());
//route imports
app.use("/api/v1", product);
//middleware for error

app.use(errorMiddleware);
module.exports = app;
