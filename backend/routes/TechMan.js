const express = require("express");
const mongoose = require("mongoose");
// Instantiate a Router (mini app that only handles routes)
const router = express.Router();
const { TechMan, Appointment } = require("../models/models");
router.use(express.json());

// add appointment to a techMan
router.post("/TechMan/:TechManId/appointment", (req, res) => {
  const newAppointment = new Appointment(req.body);
  TechMan.findById(req.params.TechManId, (error, foundTechMan) => {
    foundTechMan.app_id.push(newAppointment);
    foundTechMan.save((err, savedTechMan) => {
      res.json(newAppointment);
    });
  });
});

module.exports = router;
