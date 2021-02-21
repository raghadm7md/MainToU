const express = require("express");
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
const { Appointment } = require("../models/models");

// to can see the body from req instead of undefined
router.use(express.json());

router.get("/Testappointments", (req, res) => {
  console.log("GET /");
  res.json("SERVER IS WORKING from appointments.js");
});

// view all Appointment
router.get("/appointments", (req, res) => {
  console.log("GET /user");
  Appointment.find({}, function (err, data) {
    res.json(data);
  });
});

// add new Appointment
router.post("/appointments", (req, res) => {
  console.log("POST /appointments");
  console.log("BODY: ", req.body);

  Appointment.create(req.body, (err, newAppointment) => {
    if (err) {
      console.log("ERR: ", err);
    } else {
      console.log(newAppointment);
      res.json(newAppointment);
    }
  });
});

// Edit Appointment
router.put("/appointments/:id", (req, res) => {
  Appointment.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    }
  );
});

// delete Appointment
router.delete("/appointments/:id", (req, res) => {
  console.log("PARAMS:", req.params);
  Appointment.findOneAndDelete({ _id: req.params.id }, (err, result) => {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
