const mongoose = require('mongoose');

const admin = new mongoose.Schema({
    name : {type: String , required: true},
    email: {type : String, required: true},
    phoneNumber: {type : Number , required: true}
});
const Admin = mongoose.model('Admin', admin);

const appointment = new mongoose.Schema({
    date:  { type: Date, required: true },
    title:  { type: String, required: true },
    description:  { type: String, required: true },
    rate : Number,
    isComplate: Boolean,
    available : Boolean,
    time :{type : String, required :true}
    
});
const Appointment = mongoose.model('appointment', appointment);


const client = new mongoose.Schema({
    app_id:  [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: appointment,
            required: true
        }
    ],
    companyName:  { type: String, required: true },
    password :  { type: String, required: true },
    address : {type: String , required: true},
    email: {type : String, required: true},
    phoneNumber: {type : Number , required: true}
});
const Client = mongoose.model('client', client);


const teachMan = new mongoose.Schema({
    app_id:  [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: appointment,
            required: true
        }
    ], 

    fullName : {type: String , required: true},
    userName : {type: String , required: true},
    email: {type : String, required: true},
    phoneNumber: {type : Number , required: true}
});
const TeachMan = mongoose.model('teachMan', teachMan);

const maintenanceCompany = new mongoose.Schema({
    app_id:  [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: appointment,
            required: true
        }
    ],   
    teachMan: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: teachMan,
            required: true
        }
    ],
    companyName:  { type: String, required: true },
    description:  { type: String, required: true },
    email: {type : String, required: true},
    phoneNumber: {type : Number , required: true},

});
const MaintenanceCompany = mongoose.model('maintenanceCompany', maintenanceCompany);




module.exports = Appointment  , Admin, Client , MaintenanceCompany,TeachMan;