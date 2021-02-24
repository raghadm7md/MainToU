require("dotenv").config();
const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const bodyParser=require("body-parser");
const { Client1 } = require("./models/models");


const Appointments = require('./routes/Appointment');
const Admin = require('./routes/Admin');
const Clint = require('./routes/Clint');
const techMan = require('./routes/TechMan');


const app = express();
const models = require('./models/models')

mongoose.connect(process.env.MongoDBUrl, {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('DB IS CONNECTED :)');
});

// Instantiate Express Application Object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));

/*** Routes ***/

// Mount imported Routers
app.use("/api/Appoints",Appointments);
app.use("/api/Admin",Admin);
app.use("/api/Clint",Clint);
app.use("/api/TechMan",techMan);
app.use(express.static("build"))
app.use(express.static(path.join(__dirname, "build")));

//cors whitelist
var whitelist = [`http://localhost:${PORT}`, "https://maintou-team2.herokuapp.com"];

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      var message =
        "The CORS policy for this application does not allow access from origin " +
        origin;
      callback(new Error(message), false);
    }
  },
};

app.use(cors(corsOptions));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`SERVER ARE WORKING ON PORT:${PORT}`);
});


