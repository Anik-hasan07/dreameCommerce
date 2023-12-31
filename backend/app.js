const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const errorMiddleware = require("./middleware/error");
app.use(cors())
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//ROUTE IMPORTS
const product = require("./routes/productRoute")
const user = require("./routes/userRoute")
const order = require("./routes/orderRoute")


app.use("/api/v1",product)
app.use("/api/v1",user)
app.use("/api/v1",order)

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app