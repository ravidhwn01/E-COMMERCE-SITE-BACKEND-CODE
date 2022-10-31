const express = require("express");
const { registerUser } = require("./controllers/userController");
// cookieparser
const cookieParser = require("cookie-parser");

const app = express();
const errorMiddleware = require("./middleware/error");
const product = require("./routes/productRoute");
const userRes = require("./routes/userRoute");
// use cookie parser
app.use(cookieParser());
// for using api
app.use(express.json());
//route imports
app.use("/api/v1", product);
// register
app.use("/api/v1",userRes);
//middleware for error

app.use(errorMiddleware);
module.exports = app;
