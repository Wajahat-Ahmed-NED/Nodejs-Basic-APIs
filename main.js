const express = require("express");

const cors = require("cors");
var path = require("path");
var bodyParser = require("body-parser");
const https = require("https");

var cookieParser = require("cookie-parser");
var logger = require("morgan");
const app = express();
const axios = require("axios");
const port = 1338;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
// app.use(sqlinjection);  // add sql-injection middleware here

app.use(express.urlencoded({ limit: "100mb", extended: false }));
app.use(express.json({ limit: "100mb" }));
app.use(cors({ origin: true, credentials: true }));
const dbConnect = require("./database");
const {
  signIn,
  createUser,
  getAllUsers,
  deleteUsers,
  changePassword,
  updateProfile,
  getUserById,
} = require("./controllers/authController");
const {
  createGophishKey,
  getGophishKey,
  editGophishKey,
} = require("./controllers/gophishKeyController");
const gophishKey = require("./models/gophishKey");
const {
  getActivityLogs,
  createActivityLogs,
} = require("./controllers/activitylogsController");
app.use(logger("dev"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

dbConnect();

//controllers

//application routes
app.post("/signIn", signIn);
app.post("/signUp", createUser);
app.get("/getUser", getAllUsers);
app.put("/changePassword", changePassword);
app.put("/updateProfile", updateProfile);
app.get("/getUserById/:id", getUserById);

//log apis
app.get("/getActivityLogs/:id", getActivityLogs);
app.post("/createActivityLogs", createActivityLogs);

app.listen(port);
