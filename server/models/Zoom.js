const mongoose = require("mongoose");
const emailValidator = require("validator");
const ZoomAppointSchema = new mongoose.Schema({
  date: {
    type: String,
    required: [true, "Please choose a date"],
  },
  time: {
    type: String,
    required: [true, "Please choose a time"],
  },
  firstName: {
    type: String,
    required: [true, "Please enter a first name"],
    min: 2,
    max: 50,
    lowercase: true,
  },
  lastName: {
    type: String,
    required: [true, "Please enter a last name"],
    min: 2,
    max: 50,
    lowercase: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    max: 50,
    unique: true,
    lowercase: true,
  },
  appointType: {
    type: String,
    required: [true, "Please choose where"],
  },
});

// statics methods
// zoom appointment
ZoomAppointSchema.statics.zoomAppoint = async function (
  date,
  time,
  firstName,
  lastName,
  email,
  appointType
) {
  if (!date || !time || !firstName || !lastName || !email || !appointType) {
    throw Error("fields must be filled");
  }
  if (!emailValidator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  console.log(date, time, firstName, lastName, email, appointType);
  const newZoomAppoint = await this.create({
    date,
    time,
    firstName,
    lastName,
    email,
    appointType
  });
  return newZoomAppoint;
};

const ZoomAppoint = mongoose.model("ZoomAppoint", ZoomAppointSchema);
module.exports = ZoomAppoint;
