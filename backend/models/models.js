const mongoose = require("mongoose");

const admin = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },

});
const Admin = mongoose.model("Admin", admin);

const appointment = new mongoose.Schema({
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  rate: Number,
  isComplate: {type:Boolean , default:false},
  available: Boolean,
  time: { type: String, required: true },
});
const Appointment = mongoose.model("Appointment", appointment);

const client = new mongoose.Schema({
  app_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      // required: true
    },
  ],
  companyName: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});
const Client = mongoose.model("client", client);

const techMan = new mongoose.Schema({
  app_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      // required: true
    },
  ],

  fullName: { type: String, required: true },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});
const TechMan = mongoose.model("techMan", techMan);

const maintenanceCompany = new mongoose.Schema({
  app_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      // required: true
    },
  ],
  techMan: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "techMan",
      // required: true
    },
  ],
  companyName: { type: String, required: true },
  description: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
});
const MaintenanceCompany = mongoose.model( "maintenanceCompany", maintenanceCompany);

module.exports = { Appointment, Admin, Client, MaintenanceCompany, TechMan };