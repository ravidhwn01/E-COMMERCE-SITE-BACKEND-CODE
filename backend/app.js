const express = require("express");
const { registerUser } = require("./controllers/userController");
const app = express();
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");
const userRes = require("./routes/userRoute");
// for using api
app.use(express.json());
//route imports
app.use("/api/v1", product);
// register
app.use("/api/v1",userRes);
//middleware for error

app.use(errorMiddleware);
module.exports = app;
