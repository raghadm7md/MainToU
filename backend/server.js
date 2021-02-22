const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');
const bodyParser=require("body-parser");
const { Client1 } = require("./models/models");


const Appointments = require('./routes/Appointment');
const Admin = require('./routes/Admin');
const Clint = require('./routes/Clint');
const techMan = require('./routes/TechMan');


const app = express();
const models = require('./models/models')

mongoose.connect('mongodb://localhost:27017/crud_v01', {
  useNewUrlParser: true,
});
mongoose.connection.once('open', () => {
  console.log('DB IS CONNECTED :)');
});

// Instantiate Express Application Object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

/*** Routes ***/

// Mount imported Routers
app.use(Appointments);
app.use(Admin);
app.use(Clint);
app.use(techMan);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`SERVER ARE WORKING ON http://localhost:${PORT}`);
});


app.get('/some_path',checkAuthentication,function(req,res){
  //do something only if user is authenticated
});
function checkAuthentication(req,res,next){
  if(req.isAuthenticated()){
      //req.isAuthenticated() will return true if user is logged in
      next();
  } else{
      res.redirect("/login");
  }
}