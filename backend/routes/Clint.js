const express = require('express');
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
const {Appointment , Client} =require('../models/models')

// to can see the body from req instead of undefined
router.use(express.json());

// sign-up new clint 
router.post("/Clint", (req, res) => {
  console.log("POST /Clint");
  console.log("BODY: ", req.body);
  Client.create(req.body, function (err, newClint) {
    if (err){
      console.log(err);

    }
    console.log(newClint);
    res.json(newClint);
  });
});
// read all cilnt
router.get("/Clint", (req, res) => {
  console.log("GET /Clint");
  Client.find({}, function (err, data) {
    res.json(data);
  });
});



//Edit profile
router.put('/profile/:id', (req, res) => {

  Client.findOneAndUpdate({ _id: req.params.id }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


// show all available Appointment
router.get("/AvaAppointments", (req, res) => {
    console.log("GET /user");
    Appointment.find({available:true}, function (err, data) {
      res.json(data);
    });
  });


// booked a new  Appointment
router.post('/clint/:clintId/:appointmentId', (req, res) => {
  Client.findById(req.params.clintId, (error, foundClint) => {
    foundClint.app_id.push(req.params.appointmentId);
    foundClint.save((err, savedTechMan) => {
      res.json(" added a Appointment!!!!!! ");
    });
  });
});

// {available:false} 
// Edit Appointment
router.put('/clint/:appointmentId/', (req, res) => {
  Appointment.findOneAndUpdate({ _id: req.params.appointmentId }, {available:false}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
/**
  Story.
  find().
  populate({
    path: 'fans',
    match: { age: { $gte: 21 } },
    // Explicitly exclude `_id`, see http://bit.ly/2aEfTdB
    select: 'name -_id'
  }).
  exec();
 */
// { name: 'john', age: { $gte: 18 } }
//********** */ read up coming Appointment
router.get("/:clintId/NewAppointments", (req, res) => {
  console.log("GET /clint/NewAppointments");
  Client.findById(req.params.clintId).populate({ path:'app_id' , match:{isComplate:false}}).exec();
})



// read all booked Appointment
router.get("/:clintId/appointments", (req, res) => {
  console.log("GET /clintId/appointment");
  Client.findById(req.params.clintId, function (err, data) {
    res.json(data);
  });
});

// ******* delete booked Appointment
router.delete('/clint/:appointmentId', (req, res) => {
  console.log('PARAMS:', req.params);
  Appointment.findOneAndDelete({ _id: req.params.appointmentId}, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});


// ******* rate an Appointment
router.put('/:clintId/rate/:appointmentId', (req, res) => {
  Appointment.findOneAndUpdate({ _id: req.params.appointmentId }, req.body, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});
module.exports=router;
